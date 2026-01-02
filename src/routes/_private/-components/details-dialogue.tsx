import { useState } from "react";

import { Avatar, Icons, TextStack } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Provider } from "@/services/providers/types";

const TAB_OPTIONS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

type TabOption = (typeof TAB_OPTIONS)[keyof typeof TAB_OPTIONS];

type ProviderDetailsDialogProps = {
  provider: Provider | undefined;
  onOpenChange: (open: boolean) => void;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => {
      return part[0];
    })
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const Overview = ({ provider }: { provider: Provider }) => {
  return (
    <div className="flex flex-col divide-y divide-gray-200">
      {provider.about ? (
        <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
          <TextStack.Text className="text-base font-medium text-gray-700">About</TextStack.Text>
          <p className="text-sm text-gray-600">{provider.about}</p>
        </div>
      ) : null}

      {provider.phone || provider.email ? (
        <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
          <TextStack.Text className="text-base font-medium text-gray-700">
            Contact Information
          </TextStack.Text>
          <div className="flex flex-wrap items-center gap-4">
            {provider.phone ? (
              <div className="flex items-center gap-2">
                <Icons.Phone className="size-4 text-gray-500" />
                <span className="text-sm text-gray-600">{provider.phone}</span>
              </div>
            ) : null}
            {provider.email ? (
              <div className="flex items-center gap-2">
                <Icons.Mail className="size-4 text-gray-500" />
                <span className="text-sm text-gray-600">{provider.email}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {provider.languages && provider.languages.length > 0 ? (
        <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
          <TextStack.Text className="text-base font-medium text-gray-700">Languages</TextStack.Text>
          <div className="flex items-center gap-2">
            <Icons.Globe className="size-4 text-gray-500" />
            <span className="text-sm text-gray-600">{provider.languages.join(", ")}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Locations = ({ provider }: { provider: Provider }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextStack.Text className="text-base font-medium text-gray-900">Locations</TextStack.Text>
      {provider.clinics && provider.clinics.length > 0 ? (
        provider.clinics.map((clinic, index) => {
          return (
            <div
              className="flex flex-col gap-1 rounded-lg border border-gray-200 p-4"
              key={clinic.id ?? index}
            >
              <span className="text-sm font-medium text-gray-900">{clinic.name}</span>
              {clinic.address ? (
                <span className="text-sm text-gray-500">{clinic.address}</span>
              ) : null}
              {clinic.phone ? <span className="text-sm text-gray-500">{clinic.phone}</span> : null}
            </div>
          );
        })
      ) : (
        <p className="text-sm text-gray-500">No locations available.</p>
      )}
    </div>
  );
};

export const ProviderDetailsDialog = ({ onOpenChange, provider }: ProviderDetailsDialogProps) => {
  const [activeTab, setActiveTab] = useState<TabOption>(TAB_OPTIONS.OVERVIEW);

  if (!provider) {
    return null;
  }

  const CONTENT_BY_TAB = {
    [TAB_OPTIONS.OVERVIEW]: <Overview provider={provider} />,
    [TAB_OPTIONS.LOCATIONS]: <Locations provider={provider} />,
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={!!provider}>
      <DialogContent className="bg-white sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar initials={getInitials(provider.name)} size="lg" />
            <div className="flex flex-col">
              <DialogTitle className="text-xl">{provider.name}</DialogTitle>
              <DialogDescription>{provider.specialty?.name}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex gap-4 border-b border-gray-200">
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === TAB_OPTIONS.OVERVIEW
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              return setActiveTab(TAB_OPTIONS.OVERVIEW);
            }}
            type="button"
          >
            Overview
          </button>
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === TAB_OPTIONS.LOCATIONS
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              return setActiveTab(TAB_OPTIONS.LOCATIONS);
            }}
            type="button"
          >
            Locations
          </button>
        </div>

        <div className="h-64 overflow-y-auto py-4">{CONTENT_BY_TAB[activeTab]}</div>
      </DialogContent>
    </Dialog>
  );
};

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

type ProviderDetailsDialogProps = {
  provider: Provider | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Tab = "overview" | "locations";

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

export const ProviderDetailsDialog = ({
  onOpenChange,
  open,
  provider,
}: ProviderDetailsDialogProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!provider) {
    return null;
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
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
              activeTab === "overview"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              return setActiveTab("overview");
            }}
            type="button"
          >
            Overview
          </button>
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === "locations"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              return setActiveTab("locations");
            }}
            type="button"
          >
            Locations
          </button>
        </div>

        {activeTab === "overview" ? (
          <div className="flex flex-col divide-y divide-gray-200 py-1">
            {provider.about ? (
              <div className="flex flex-col gap-2 py-4">
                <TextStack.Text className="text-base font-medium text-gray-800">
                  About
                </TextStack.Text>
                <p className="text-sm text-gray-600">{provider.about}</p>
              </div>
            ) : null}

            {provider.phone || provider.email ? (
              <div className="flex flex-col gap-2 py-4">
                <TextStack.Text className="text-base font-medium text-gray-800">
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
              <div className="flex flex-col gap-2 py-4">
                <TextStack.Text className="text-base font-medium text-gray-800">
                  Languages
                </TextStack.Text>
                <div className="flex items-center gap-2">
                  <Icons.Globe className="size-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{provider.languages.join(", ")}</span>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {activeTab === "locations" ? (
          <div className="flex flex-col gap-3 py-4">
            <TextStack.Text className="text-base font-medium text-gray-800">
              Locations
            </TextStack.Text>
            {provider.clinics && provider.clinics.length > 0 ? (
              provider.clinics.map((clinic, index) => {
                return (
                  <div
                    className="flex flex-col gap-1 rounded-lg border border-gray-200 p-4"
                    key={clinic.id ?? index}
                  >
                    <span className="text-sm font-medium text-gray-800">{clinic.name}</span>
                    {clinic.address ? (
                      <span className="text-sm text-gray-500">{clinic.address}</span>
                    ) : null}
                    {clinic.phone ? (
                      <span className="text-sm text-gray-500">{clinic.phone}</span>
                    ) : null}
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500">No locations available.</p>
            )}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

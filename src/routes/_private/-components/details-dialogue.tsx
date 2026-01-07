import { useState } from "react";

import { Avatar, Icons, Locations, Overview } from "@/components";
import { ProviderDetailsDialogSkeleton } from "@/components/ui/details-dialogue/dialogue-skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProviderDetailQuery } from "@/services/providers/actions";

const TAB_OPTIONS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

type TabOption = (typeof TAB_OPTIONS)[keyof typeof TAB_OPTIONS];

type ProviderDetailsDialogProps = {
  providerId?: number;
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

export const ProviderDetailsDialog = ({ onOpenChange, providerId }: ProviderDetailsDialogProps) => {
  const [activeTab, setActiveTab] = useState<TabOption>(TAB_OPTIONS.OVERVIEW);

  const { data: provider, isLoading } = useProviderDetailQuery(providerId ?? 0, {
    enabled: !!providerId,
  });

  if (!providerId || !provider) {
    return null;
  }

  if (isLoading) {
    return <ProviderDetailsDialogSkeleton onOpenChange={onOpenChange} open={!!providerId} />;
  }

  const CONTENT_BY_TAB = {
    [TAB_OPTIONS.OVERVIEW]: <Overview provider={provider} />,
    [TAB_OPTIONS.LOCATIONS]: provider ? <Locations provider={provider} /> : null,
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={!!providerId}>
      <DialogContent className="bg-white sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar initials={getInitials(provider.name)} size="lg" />
            <div className="flex flex-col">
              <DialogTitle className="text-xl">{provider.name}</DialogTitle>
              <DialogDescription>{provider.specialty.name}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex gap-1 rounded-full bg-gray-100 p-1">
          <button
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === TAB_OPTIONS.OVERVIEW
                ? "bg-background-brand-default text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
            onClick={() => {
              return setActiveTab(TAB_OPTIONS.OVERVIEW);
            }}
            type="button"
          >
            <Icons.User className="size-4" />
            Overview
          </button>
          <button
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === TAB_OPTIONS.LOCATIONS
                ? "bg-background-brand-default text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
            onClick={() => {
              return setActiveTab(TAB_OPTIONS.LOCATIONS);
            }}
            type="button"
          >
            <Icons.Location className="size-4" />
            Locations
          </button>
        </div>

        <div className="h-64 overflow-y-auto py-4">{CONTENT_BY_TAB[activeTab]}</div>
      </DialogContent>
    </Dialog>
  );
};

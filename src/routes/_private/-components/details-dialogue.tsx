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

        <div className="flex flex-col divide-y py-4">
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
                    <span className="text-sm text-gray-600">{provider.email}</span>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {provider.languages && provider.languages.length > 0 ? (
            <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
              <TextStack.Text className="text-base font-medium text-gray-700">
                Languages
              </TextStack.Text>
              <div className="flex flex-wrap items-center gap-2">
                <Icons.Globe className="size-4 text-gray-500" />
                {provider.languages.map((language) => {
                  return (
                    <span
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      key={language}
                    >
                      {language}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};

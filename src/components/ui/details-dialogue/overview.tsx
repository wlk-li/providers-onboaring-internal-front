import { Icons, TextStack } from "@/components";
import type { Provider } from "@/services/providers";

export const Overview = ({ provider }: { provider: Provider }) => {
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

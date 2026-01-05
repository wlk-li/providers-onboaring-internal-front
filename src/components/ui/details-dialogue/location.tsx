import { TextStack } from "@/components";
import type { Provider } from "@/services/providers";

export const Locations = ({ provider }: { provider: Provider }) => {
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

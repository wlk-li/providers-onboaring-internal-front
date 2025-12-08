import { Button, Card, Icons, TextStack } from "@/components";
import type { Provider } from "@/services/providers/types";

type CardsLayoutProps = {
  providers: Provider[];
  onViewDetails?: (provider: Provider) => void;
};

export const CardsLayout = ({ onViewDetails, providers }: CardsLayoutProps) => {
  if (!providers || providers.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">No providers found</div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => {
        const primaryClinic = provider.clinics?.[0];
        const additionalClinicsCount = (provider.clinics?.length || 0) - 1;

        return (
          <Card.Root className="w-full" key={provider.id}>
            <Card.Avatar
              alt={provider.name}
              src={provider.profilePic || `https://robohash.org/${provider.name}.png?size=200x200`}
            />

            <div className="flex flex-col gap-5 p-5">
              <TextStack.Wrapper>
                <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
                  {provider.name}
                </TextStack.Text>

                <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
                  {provider.specialty?.name || "General Practice"}
                </TextStack.Subtext>
              </TextStack.Wrapper>

              {primaryClinic ? (
                <Card.Location
                  icon={<Icons.Location />}
                  locationName={primaryClinic.name}
                  moreCount={additionalClinicsCount > 0 ? additionalClinicsCount : undefined}
                />
              ) : null}

              <Button
                className="w-full py-2"
                onClick={() => {
                  return onViewDetails?.(provider);
                }}
                variant="primary"
              >
                View details
              </Button>
            </div>
          </Card.Root>
        );
      })}
    </div>
  );
};

import { Button, Card, CardSkeleton, Icons, TextStack } from "@/components";
import type { Provider } from "@/services/providers/types";

type CardsLayoutProps = {
  providers?: Provider[];
  isLoading?: boolean;
  onViewDetails?: (provider: Provider) => void;
};

export const CardsLayout = ({ isLoading, onViewDetails, providers }: CardsLayoutProps) => {
  if (!providers) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">No providers found</div>
    );
  }

  const CARD_FILL_AMOUNT = 6;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? Array.from({ length: CARD_FILL_AMOUNT }).map((_, i) => {
            return <CardSkeleton key={i} />;
          })
        : providers.map((provider) => {
            const primaryClinic = provider.clinics?.[0];
            const additionalClinicsCount = provider.clinics?.length || 0;

            return (
              <Card.Root key={provider.id}>
                <Card.Avatar alt={provider.name} src={provider.profilePic} />

                <div className="flex flex-col gap-5 p-5">
                  <TextStack.Wrapper>
                    <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
                      {provider.name}
                    </TextStack.Text>

                    <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
                      {provider.specialty?.name}
                    </TextStack.Subtext>
                  </TextStack.Wrapper>

                  {primaryClinic ? (
                    <Card.Location
                      icon={<Icons.Location />}
                      locationName={primaryClinic.name}
                      moreCount={additionalClinicsCount}
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

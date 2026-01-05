import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { TextStack } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { type Provider, providerFiltersSchema } from "@/services/providers";
import { useProvidersListQuery } from "@/services/providers/actions";
import { CardsLayout } from "./-components/cards-layout";
import { ProviderDetailsDialog } from "./-components/details-dialogue";
import { FilterMenu } from "./-components/filter-menu";

const HomePage = () => {
  const filter = Route.useSearch();
  const parsedFilters = providerFiltersSchema.parse(filter);
  const { data: providers, isLoading } = useProvidersListQuery({ filter: parsedFilters });
  const [selectedProvider, setSelectedProvider] = useState<Provider | undefined>(undefined);

  const providersQuantity = providers?.data.length || 0;
  const providersLabel = `${providersQuantity} provider(s) found`;

  const handleViewDetails = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProvider(undefined);
    }
  };

  return (
    <div className="flex flex-col px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-6xl flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex h-21 w-full items-center justify-between">
            <TextStack.Wrapper>
              <TextStack.Text className="text-3xl text-text-brand-on-brand-secondary">
                Healthcare Providers
              </TextStack.Text>
              <TextStack.Subtext className="text-base text-text-brand-on-brand-secondary">
                Find and connect with healthcare professionals in your area
              </TextStack.Subtext>
            </TextStack.Wrapper>
          </div>

          <div className="flex flex-col gap-7">
            <FilterMenu />

            <div className="flex flex-col gap-3">
              {isLoading ? (
                <Skeleton className="h-6 w-30" />
              ) : (
                <span className="text-gray-500">{providersLabel}</span>
              )}
              <CardsLayout
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                providers={providers?.data}
              />
            </div>
          </div>
        </div>
      </div>
      <ProviderDetailsDialog onOpenChange={handleDialogOpenChange} provider={selectedProvider} />
    </div>
  );
};

export const Route = createFileRoute("/_private/")({
  component: HomePage,
  validateSearch: providerFiltersSchema,
});

import { createFileRoute } from "@tanstack/react-router";

import { TextStack } from "@/components";
import { useProvidersListQuery } from "@/services/providers/actions";
import { CardsLayout } from "./-components/cards-layout";
import { FilterMenu } from "./-components/filter-menu";

const HomePage = () => {
  const { data: providers } = useProvidersListQuery();

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
              <span>
                {providers?.data.length} provider{providers?.data.length !== 1 ? "s" : ""}
              </span>

              <CardsLayout providers={providers?.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

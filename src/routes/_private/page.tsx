import { createFileRoute } from "@tanstack/react-router";

import { TextStack } from "@/components";
import { CardsLayout } from "./-components/cards-layout";
import { FilterMenu } from "./-components/filter-menu";
import { QueryTest } from "./-components/q";

const HomePage = () => {
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
              <span>6 providers</span>

              <CardsLayout />
            </div>
            <QueryTest />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

import { createFileRoute } from "@tanstack/react-router";

import { Icons, Input, TextStack } from "@/components";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex h-21 max-w-6xl flex-col justify-between">
        <TextStack.Wrapper>
          <TextStack.Text className="text-lg text-text-brand-on-brand-secondary">
            Healthcare Providers
          </TextStack.Text>
          <TextStack.Subtext className="text-base text-text-brand-on-brand-secondary">
            Find and connect with healthcare professionals in your area
          </TextStack.Subtext>
        </TextStack.Wrapper>

        <Input left={<Icons.Search />} placeholder="Search healthcare providers" />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

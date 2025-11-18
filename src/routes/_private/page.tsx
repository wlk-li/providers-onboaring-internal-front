import { createFileRoute } from "@tanstack/react-router";

import { Icons, Input, Subtext, Text, TextStack } from "@/components";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex h-21 max-w-6xl justify-between">
        <TextStack>
          <Text className="text-lg text-text-brand-on-brand-secondary">Healthcare Providers</Text>
          <Subtext className="text-base text-text-brand-on-brand-secondary">
            Find and connect with healthcare professionals in your area
          </Subtext>
        </TextStack>

        <Input left={<Icons.Search />} placeholder="Search healthcare providers" />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

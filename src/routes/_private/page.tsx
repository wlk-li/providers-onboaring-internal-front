import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { DropdownMenu, Icons, TextStack } from "@/components";

const HomePage = () => {
  const [selectedGender, setSelectedGender] = useState("All genders");

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

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="relative flex flex-row items-center justify-between rounded-md bg-neutral-50">
            {selectedGender}
            <Icons.ChevronDown />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)]">
            <DropdownMenu.CheckboxItem
              checked={selectedGender === "All genders"}
              onCheckedChange={() => {
                return setSelectedGender("All genders");
              }}
            >
              All genders
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={selectedGender === "Female"}
              onCheckedChange={() => {
                return setSelectedGender("Female");
              }}
            >
              Female
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={selectedGender === "Male"}
              onCheckedChange={() => {
                return setSelectedGender("Male");
              }}
            >
              Male
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

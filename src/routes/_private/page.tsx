import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { DropdownMenu, Icons, TextStack } from "@/components";
import { Items } from "@/types/mock";

const HomePage = () => {
  // TODO: use react-hook-form in future task
  const [selectedGenderId, setSelectedGenderId] = useState(0);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(0);
  const [selectedClinicId, setSelectedClinicId] = useState(0);

  const selectedGender = Items.genders.find((item) => {
    return item.id === selectedGenderId;
  })?.label;

  const selectedSpecialty = Items.specialties.find((item) => {
    return item.id === selectedSpecialtyId;
  })?.label;

  const selectedClinic = Items.clinics.find((item) => {
    return item.id === selectedClinicId;
  })?.label;

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
            {Items.genders.map((item) => {
              return (
                <DropdownMenu.CheckboxItem
                  checked={selectedGenderId === item.id}
                  key={item.id}
                  onCheckedChange={() => {
                    return setSelectedGenderId(item.id);
                  }}
                >
                  {item.label}
                </DropdownMenu.CheckboxItem>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="relative flex flex-row items-center justify-between rounded-md bg-neutral-50">
            {selectedSpecialty}
            <Icons.ChevronDown />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)]">
            {Items.specialties.map((item) => {
              return (
                <DropdownMenu.CheckboxItem
                  checked={selectedSpecialtyId === item.id}
                  key={item.id}
                  onCheckedChange={() => {
                    return setSelectedSpecialtyId(item.id);
                  }}
                >
                  {item.label}
                </DropdownMenu.CheckboxItem>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="relative flex flex-row items-center justify-between rounded-md bg-neutral-50">
            {selectedClinic}
            <Icons.ChevronDown />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)]">
            {Items.clinics.map((item) => {
              return (
                <DropdownMenu.CheckboxItem
                  checked={selectedClinicId === item.id}
                  key={item.id}
                  onCheckedChange={() => {
                    return setSelectedClinicId(item.id);
                  }}
                >
                  {item.label}
                </DropdownMenu.CheckboxItem>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

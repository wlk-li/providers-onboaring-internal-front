import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button, FilterContainer, Icons, Input, TextStack } from "@/components";
import { ITEMS } from "@/types/mock";

const HomePage = () => {
  // TODO: use react-hook-form in future task
  const [selectedGenderId, setSelectedGenderId] = useState(0);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(0);
  const [selectedClinicId, setSelectedClinicId] = useState(0);

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

          <div className="flex w-full flex-col gap-4">
            <Input left={<Icons.Search />} placeholder="Search healthcare providers" />

            <div className="flex justify-between">
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <FilterContainer
                  items={ITEMS.genders}
                  label="Gender"
                  onSelect={setSelectedGenderId}
                  selectedId={selectedGenderId}
                />

                <FilterContainer
                  items={ITEMS.specialties}
                  label="Specialty"
                  onSelect={setSelectedSpecialtyId}
                  selectedId={selectedSpecialtyId}
                />

                <FilterContainer
                  items={ITEMS.clinics}
                  label="Clinic"
                  onSelect={setSelectedClinicId}
                  selectedId={selectedClinicId}
                />

                <Button className="w-full py-3 md:w-auto" variant="secondary">
                  <Icons.Heart /> Favorites
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <Filters.Root
          filters={{
            gender: { selectedId: selectedGenderId, onSelect: setSelectedGenderId },
            specialty: { selectedId: selectedSpecialtyId, onSelect: setSelectedSpecialtyId },
            clinic: { selectedId: selectedClinicId, onSelect: setSelectedClinicId },
          }}
        >
          <Filters.SearchRow>
            <Input left={<Icons.Search />} placeholder="Search healthcare providers" />
          </Filters.SearchRow>

          <Filters.FilterRow>
            <Filters.FilterGroup>
              <Filters.Filter items={ITEMS.genders} name="gender" />
              <Filters.Filter items={ITEMS.specialties} name="specialty" />
              <Filters.Filter items={ITEMS.clinics} name="clinic" />
            </Filters.FilterGroup>
            <Filters.FavoriteButton>
              <Button className="w-full md:w-auto" variant="secondary">
                <Icons.Heart /> Favorites
              </Button>
            </Filters.FavoriteButton>
          </Filters.FilterRow>
        </Filters.Root> */}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private/")({ component: HomePage });

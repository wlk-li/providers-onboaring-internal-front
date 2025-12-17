import { type Control, Controller } from "react-hook-form";

import { Button, DropdownFilter, Icons, Input } from "@/components";
import type { ProviderFilters } from "@/services/providers/types";
import { ITEMS } from "@/types/mock";

type FilterMenuProps = {
  control: Control<ProviderFilters>;
};

export const FilterMenu = ({ control }: FilterMenuProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Controller
        control={control}
        name="search"
        render={({ field }) => {
          return (
            <Input {...field} left={<Icons.Search />} placeholder="Search healthcare providers" />
          );
        }}
      />

      <div className="flex justify-between">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <Controller
            control={control}
            name="gender"
            render={({ field }) => {
              return (
                <DropdownFilter
                  items={ITEMS.genders}
                  label="Gender"
                  onSelect={field.onChange}
                  selectedId={field.value}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="specialtyId"
            render={({ field }) => {
              return (
                <DropdownFilter
                  items={ITEMS.specialties}
                  label="Specialty"
                  onSelect={field.onChange}
                  selectedId={field.value}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="clinicId"
            render={({ field }) => {
              return (
                <DropdownFilter
                  items={ITEMS.clinics}
                  label="Clinic"
                  onSelect={field.onChange}
                  selectedId={field.value}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="favorited"
            render={({ field }) => {
              return (
                <Button
                  className="w-full py-3 md:max-w-30"
                  onClick={() => {
                    return field.onChange("favorited", !field.value);
                  }}
                  variant={field.value ? "primary" : "secondary"}
                >
                  <Icons.Heart /> Favorites
                </Button>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, DropdownFilter, Icons, Input } from "@/components";
import { providerFiltersSchema } from "@/services/providers/schemas";
import type { ProviderFilters } from "@/services/providers/types";
import { ITEMS } from "@/types/mock";

export const FilterMenu = () => {
  const { control, setValue, watch } = useForm<ProviderFilters>({
    resolver: zodResolver(providerFiltersSchema),
    defaultValues: {
      search: "",
      specialtyId: 0,
      clinicId: 0,
      favorited: false,
    },
  });

  const favorited = watch("favorited");

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
          <Button
            className="w-full py-3 md:max-w-30"
            onClick={() => {
              return setValue("favorited", !favorited);
            }}
            variant={favorited ? "primary" : "secondary"}
          >
            <Icons.Heart /> Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};

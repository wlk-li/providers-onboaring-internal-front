import { Controller, useForm } from "react-hook-form";

import { Button, DropdownFilter, Icons, Input } from "@/components";
import { ITEMS } from "@/types/mock";

export const FilterMenu = () => {
  const { control } = useForm({
    defaultValues: {
      gender: 0,
      specialtyId: 0,
      clinicId: 0,
    },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <Input left={<Icons.Search />} placeholder="Search healthcare providers" />

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

          <Button className="w-full py-3 md:max-w-30" variant="secondary">
            <Icons.Heart /> Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};

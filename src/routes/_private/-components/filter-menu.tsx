import { useNavigate } from "@tanstack/react-router";

import { Button, DropdownFilter, Icons, Input } from "@/components";
import { ITEMS } from "@/types/mock";
import { Route } from "../page";

export const FilterMenu = () => {
  const navigate = useNavigate({ from: Route.fullPath });
  const filters = Route.useSearch();

  const updateFilter = <K extends keyof typeof filters>(key: K, value: (typeof filters)[K]) => {
    navigate({
      search: (prev) => {
        const cleanValue = value === "" ? undefined : value;

        return { ...prev, [key]: cleanValue };
      },
    });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        left={<Icons.Search />}
        onChange={(e: { target: { value: string } }) => {
          updateFilter("search", e.target.value);
        }}
        placeholder="Search healthcare providers"
        value={filters.search ?? ""}
      />

      <div className="flex justify-between">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <DropdownFilter
            items={ITEMS.genders}
            onSelect={(value) => {
              return updateFilter("gender", value as typeof filters.gender);
            }}
            selectedId={filters.gender}
          />

          <DropdownFilter
            items={ITEMS.specialties}
            onSelect={(value) => {
              return updateFilter("specialtyId", value);
            }}
            selectedId={filters.specialtyId}
          />

          <DropdownFilter
            items={ITEMS.clinics}
            onSelect={(value) => {
              return updateFilter("clinicId", value);
            }}
            selectedId={filters.clinicId}
          />

          <Button
            className="w-full py-3 md:max-w-30"
            onClick={() => {
              return updateFilter("favorited", !filters.favorited);
            }}
            variant={filters.favorited ? "primary" : "secondary"}
          >
            <Icons.Heart /> Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};

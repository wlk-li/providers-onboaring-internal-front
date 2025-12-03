import { useState } from "react";

import { Button, DropdownFilter, Icons, Input } from "@/components";
import { ITEMS } from "@/types/mock";

export const FilterMenu = () => {
  const [selectedGenderId, setSelectedGenderId] = useState(0);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(0);
  const [selectedClinicId, setSelectedClinicId] = useState(0);

  return (
    <div className="flex w-full flex-col gap-4">
      <Input left={<Icons.Search />} placeholder="Search healthcare providers" />

      <div className="flex w-full flex-col gap-4 md:flex-row">
        <DropdownFilter
          items={ITEMS.genders}
          label="Gender"
          onSelect={setSelectedGenderId}
          selectedId={selectedGenderId}
        />

        <DropdownFilter
          items={ITEMS.specialties}
          label="Specialty"
          onSelect={setSelectedSpecialtyId}
          selectedId={selectedSpecialtyId}
        />

        <DropdownFilter
          items={ITEMS.clinics}
          label="Clinic"
          onSelect={setSelectedClinicId}
          selectedId={selectedClinicId}
        />

        <Button className="w-full py-3 md:max-w-30" variant="secondary">
          <Icons.Heart /> Favorites
        </Button>
      </div>
    </div>
  );
};

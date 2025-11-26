// import { createContext, type ReactNode, useContext } from "react";
// import { tv } from "tailwind-variants";

// import { DropdownMenu } from "../dropdown-menu";
// import { Icons } from "../icons";

// type FilterItem = {
//   id: number;
//   label: string;
// };

// type FilterContextType = {
//   filters: Record<string, { selectedId: number; onSelect: (id: number) => void }>;
// };

// const FilterContext = createContext<FilterContextType | undefined>(undefined);

// const useFilterContext = () => {
//   const context = useContext(FilterContext);
//   if (!context) {
//     throw new Error("Filter components must be used within Filters.Root");
//   }

//   return context;
// };

// const filtersVariants = tv({
//   slots: {
//     root: "w-full",
//     container: "flex flex-col gap-3",
//     searchRow: "w-full",
//     filterRow: "flex flex-col gap-3 md:flex-row md:items-center md:gap-3",
//     filterGroup: "flex flex-1 flex-col gap-3 md:flex-row md:gap-3",
//     favoriteButton: "w-full md:w-auto",
//   },
// });

// const { container, favoriteButton, filterGroup, filterRow, root, searchRow } = filtersVariants();

// type FiltersRootProps = {
//   children: ReactNode;
//   filters: Record<string, { selectedId: number; onSelect: (id: number) => void }>;
// };

// const Root = ({ children, filters }: FiltersRootProps) => {
//   return (
//     <FilterContext.Provider value={{ filters }}>
//       <div className={root()}>
//         <div className={container()}>{children}</div>
//       </div>
//     </FilterContext.Provider>
//   );
// };

// type FilterProps = {
//   name: string;
//   items: FilterItem[];
// };

// const Filter = ({ items, name }: FilterProps) => {
//   const { filters } = useFilterContext();
//   const { onSelect, selectedId } = filters[name];
//   const selectedLabel = items.find((item) => {
//     return item.id === selectedId;
//   })?.label;

//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger>
//         {selectedLabel}
//         <Icons.ChevronDown />
//       </DropdownMenu.Trigger>
//       <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)]">
//         {items.map((item) => {
//           return (
//             <DropdownMenu.CheckboxItem
//               checked={selectedId === item.id}
//               key={item.id}
//               onCheckedChange={() => {
//                 return onSelect(item.id);
//               }}
//             >
//               {item.label}
//             </DropdownMenu.CheckboxItem>
//           );
//         })}
//       </DropdownMenu.Content>
//     </DropdownMenu.Root>
//   );
// };

// const SearchRow = ({ children }: { children: ReactNode }) => {
//   return <div className={searchRow()}>{children}</div>;
// };

// const FilterRow = ({ children }: { children: ReactNode }) => {
//   return <div className={filterRow()}>{children}</div>;
// };

// const FilterGroup = ({ children }: { children: ReactNode }) => {
//   return <div className={filterGroup()}>{children}</div>;
// };

// const FavoriteButton = ({ children }: { children: ReactNode }) => {
//   return <div className={favoriteButton()}>{children}</div>;
// };

// export const Filters = {
//   Root,
//   Filter,
//   SearchRow,
//   FilterRow,
//   FilterGroup,
//   FavoriteButton,
// };

import { DropdownMenu } from "@/components";
import { Icons } from "@/components";

type FilterItem = {
  id: number;
  label: string;
};

type FilterContainerProps = {
  label: string;
  items: FilterItem[];
  selectedId: number;
  onSelect: (id: number) => void;
};

export const FilterContainer = ({ items, onSelect, selectedId }: FilterContainerProps) => {
  const selectedLabel = items.find((item) => {
    return item.id === selectedId;
  })?.label;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="relative flex flex-row items-center justify-between rounded-md bg-neutral-50">
        {selectedLabel}
        <Icons.ChevronDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {items.map((item) => {
          return (
            <DropdownMenu.CheckboxItem
              checked={selectedId === item.id}
              key={item.id}
              onCheckedChange={() => {
                return onSelect(item.id);
              }}
            >
              {item.label}
            </DropdownMenu.CheckboxItem>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

import { DropdownMenu } from "@/components";
import { Icons } from "@/components";

type FilterItem<T = string | number> = {
  id: T;
  label: string;
};

type DropdownFilterProps<T = string | number> = {
  label: string;
  items: FilterItem<T>[];
  selectedId: T;
  onSelect: (id: T) => void;
};

export const DropdownFilter = <T extends string | number>({
  items,
  onSelect,
  selectedId,
}: DropdownFilterProps<T>) => {
  const selectedLabel = items.find((item) => {
    return item.id === selectedId;
  })?.label;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="relative flex size-full flex-row items-center justify-between rounded-md bg-neutral-50 md:max-w-57">
        {selectedLabel}
        <Icons.ChevronDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)]">
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

import { DropdownMenu } from "@/components";
import { Icons } from "@/components";

type FilterItem = {
  id: number;
  label: string;
};

type DropdownFilterProps = {
  label: string;
  items: FilterItem[];
  selectedId: number;
  onSelect: (id: number) => void;
};

export const DropdownFilter = ({ items, onSelect, selectedId }: DropdownFilterProps) => {
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

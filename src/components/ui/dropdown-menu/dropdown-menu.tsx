import type { ComponentProps } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { tv } from "tailwind-variants";

import { Icons } from "../icons";

const dropdownVariants = tv({
  slots: {
    content:
      "z-50 w-full min-w-[8rem] overflow-hidden rounded-md border border-border-default-default bg-background-default-default p-1 text-text-default-default shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    item: "relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-base text-text-default-default",
    checkboxItem:
      "relative flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-sm outline-hidden focus:bg-background-default-secondary focus:text-text-default-default",
    trigger:
      "relative flex flex-row items-center justify-between rounded-md border border-border-default-default bg-neutral-50 px-3 py-3",
  },
});

const { checkboxItem, content, item, trigger } = dropdownVariants();

const Root = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Root>) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

const Trigger = ({ className, ...props }: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => {
  return (
    <DropdownMenuPrimitive.Trigger
      className={trigger({ className })}
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
};

const Content = ({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={content({ className })}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

const Item = ({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) => {
  return (
    <DropdownMenuPrimitive.Item
      className={item({ className })}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
};

const CheckboxItem = ({
  checked,
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      className={checkboxItem({ className })}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.Check />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

export const DropdownMenu = {
  Root,
  Content,
  Item,
  CheckboxItem,
  Trigger,
};

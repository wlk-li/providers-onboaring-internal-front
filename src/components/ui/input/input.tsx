import { type ComponentProps, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { IconWrapper } from "@/components";
import { SIZE, type Size, type Styled } from "@/types/styles";

const inputVariants = tv({
  slots: {
    container: "relative flex w-full flex-col gap-1.5",
    input:
      "flex w-full border border-border-default-default px-3 py-1 text-base text-text-default-default placeholder:text-text-default-tertiary",
    leftIcon:
      "pointer-events-none absolute top-1/2 left-2 flex -translate-y-1/2 items-center text-text-default-default",
  },
  variants: {
    size: {
      [SIZE.MEDIUM]: { input: "rounded-md py-3 pr-10 pl-10" },
    },
  },
});

const { container, input, leftIcon } = inputVariants();

type InputProps = {
  containerClassName?: string;
  left?: ReactNode;
  leftIconSize?: Size;
} & Omit<ComponentProps<"input">, "size"> &
  Styled &
  VariantProps<typeof inputVariants>;

export const Input = ({
  className,
  containerClassName,
  left,
  size = SIZE.MEDIUM,
  leftIconSize = size,
  ...props
}: InputProps) => {
  return (
    <div className={container({ className: containerClassName })}>
      <div className="relative flex flex-row items-center rounded-md bg-neutral-50">
        {left ? (
          <IconWrapper className={leftIcon()} size={leftIconSize}>
            {left}
          </IconWrapper>
        ) : null}

        <input className={input({ className, size })} {...props} />
      </div>
    </div>
  );
};

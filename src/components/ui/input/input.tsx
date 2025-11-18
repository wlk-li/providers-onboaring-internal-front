import { type ComponentProps, type ReactNode } from "react";
import { tv } from "tailwind-variants";

import { IconWrapper } from "@/components";
import { SIZE, type Size, type Styled } from "@/types/styles";

const inputVariants = tv({
  slots: {
    container: "relative flex w-full flex-col gap-1.5",
    input:
      "flex w-full border border-border-default-default px-3 py-1 text-base text-text-default-default transition-colors placeholder:text-text-default-tertiary focus-visible:outline-border-brand-default disabled:cursor-not-allowed disabled:bg-background-disabled-default disabled:text-text-disabled-on-disabled md:text-sm",
    leftIcon:
      "pointer-events-none absolute top-1/2 left-2 flex -translate-y-1/2 items-center text-text-default-default",
  },
  variants: {
    size: {
      [SIZE.X_SMALL]: { input: "rounded-md py-1.5 pr-8 pl-8" },
      [SIZE.SMALL]: { input: "rounded-md py-2 pr-9 pl-9" },
      [SIZE.MEDIUM]: { input: "rounded-md py-3 pr-10 pl-10" },
      [SIZE.LARGE]: { input: "rounded-md py-4 pr-10 pl-10" },
      [SIZE.X_LARGE]: { input: "rounded-md py-5 pr-11 pl-11" },
    },
  },
});

const { container, input, leftIcon } = inputVariants();

type InputProps = {
  containerClassName?: string;
  left?: ReactNode;
  size?: Size;
  leftIconSize?: Size;
} & Omit<ComponentProps<"input">, "size"> &
  Styled;

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
      <div className="relative flex flex-row items-center rounded-md bg-[#FAFAFB]">
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

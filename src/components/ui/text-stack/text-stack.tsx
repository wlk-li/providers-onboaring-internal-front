import type { ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";

const textStackVariants = tv({
  slots: {
    text: "font-bold",
    subtext: "font-extralight",
  },
});

const { subtext, text } = textStackVariants();

export const Text = ({ children, className, ...props }: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2 className={text({ className })} {...props}>
      {children}
    </h2>
  );
};

export const Subtext = ({ children, className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={subtext({ className })} {...props}>
      {children}
    </span>
  );
};

export const TextStack = ({ children, className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

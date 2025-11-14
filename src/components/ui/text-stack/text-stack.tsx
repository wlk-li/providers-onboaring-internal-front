import { tv, type VariantProps } from "tailwind-variants";

const textStackVariants = tv({
  slots: {
    wrapper: "",
    text: "font-bold text-text-brand-on-brand-secondary",
    subtext: "font-extralight text-text-brand-on-brand-secondary",
  },
  variants: {
    size: {
      sm: {
        text: "text-base",
        subtext: "text-sm",
      },
      md: {
        text: "text-lg",
        subtext: "text-base",
      },
      lg: {
        text: "text-xl",
        subtext: "text-lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextStackProps = {
  subtext: string;
  text: string;
} & VariantProps<typeof textStackVariants>;

export const TextStack = ({ size, subtext, text }: TextStackProps) => {
  const { subtext: subtextClass, text: textClass, wrapper } = textStackVariants({ size });

  return (
    <div className={wrapper()}>
      <h2 className={textClass()}>{text}</h2>
      <span className={subtextClass()}>{subtext}</span>
    </div>
  );
};

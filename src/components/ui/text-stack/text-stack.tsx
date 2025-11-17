import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "font-bold",
});

const subtextVariants = tv({
  base: "font-extralight",
});

export type TextProps = React.PropsWithChildren &
  VariantProps<typeof textVariants> & {
    className?: string;
  };

export const Text = ({ children, className }: TextProps) => {
  return <h2 className={`${textVariants()} ${className || ""}`}>{children}</h2>;
};

export type SubtextProps = React.PropsWithChildren &
  VariantProps<typeof subtextVariants> & {
    className?: string;
  };

export const Subtext = ({ children, className }: SubtextProps) => {
  return <span className={`${subtextVariants()} ${className || ""}`}>{children}</span>;
};

export const TextStack = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

import { tv, type VariantProps } from "tailwind-variants";

const avatarVariants = tv({
  base: "flex items-center justify-center rounded-full",
  variants: {
    variant: {
      primary: "bg-blue-500 font-bold text-white",
    },
    size: {
      sm: "h-6 w-6 text-xs",
      default: "h-8 w-8 text-sm",
      lg: "h-12 w-12 text-lg",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export type AvatarProps = {
  initials: string;
} & VariantProps<typeof avatarVariants>;

const Avatar = ({ initials, size, variant }: AvatarProps) => {
  return <div className={avatarVariants({ variant, size })}>{initials}</div>;
};

export { Avatar, avatarVariants };

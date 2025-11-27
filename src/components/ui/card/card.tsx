import { type ComponentProps, type ReactNode } from "react";
import { tv } from "tailwind-variants";

import { SIZE, type Size } from "@/types/styles";
import { IconWrapper } from "../icons";

const cardVariants = tv({
  slots: {
    root: "flex flex-col overflow-hidden rounded-xl border border-border-default-default bg-background-default-default text-text-default-default shadow-sm",
    avatar: "h-40 w-full object-cover",
    header:
      "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    location: "relative flex flex-row items-center gap-2",
    cardIcon: "pointer-events-none font-extralight text-text-default-default",
    footer: "flex items-center gap-3 px-6 pt-6 pb-6",
  },
});

const { avatar, cardIcon, footer, header, location, root } = cardVariants();

const Root = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={root({ className })} data-slot="card" {...props} />;
};

const Avatar = ({
  alt = "Profile image",
  className,
  src,
  ...props
}: ComponentProps<"img"> & { src: string; alt?: string }) => {
  return (
    <img alt={alt} className={avatar({ className })} data-slot="card-avatar" src={src} {...props} />
  );
};

const Header = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={header({ className })} data-slot="card-header" {...props} />;
};

const Location = ({
  className,
  icon,
  iconSize = SIZE.MEDIUM,
  locationName,
  moreCount,
  ...props
}: ComponentProps<"div"> & {
  icon?: ReactNode;
  iconSize?: Size;
  locationName: string;
  moreCount?: number;
}) => {
  return (
    <div className={location({ className })} data-slot="card-location" {...props}>
      <IconWrapper className={cardIcon()} size={iconSize}>
        {icon}
      </IconWrapper>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-extralight">{locationName}</span>
        {moreCount ? (
          <span className="text-xs font-extralight text-text-brand-on-brand-secondary">
            +{moreCount} more locations
          </span>
        ) : null}
      </div>
    </div>
  );
};

const Footer = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={footer({ className })} data-slot="card-footer" {...props} />;
};

export const Card = {
  Root,
  Avatar,
  Header,
  Location,
  Footer,
};

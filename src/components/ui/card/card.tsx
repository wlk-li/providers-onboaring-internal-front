import { type ComponentProps, type ReactNode } from "react";
import { tv } from "tailwind-variants";

import { SIZE, type Size } from "@/types/styles";
import { IconWrapper } from "../icons";

const cardVariants = tv({
  slots: {
    root: "flex flex-col gap-5 overflow-hidden rounded-xl border border-border-default-default bg-background-default-default text-text-default-default shadow-sm",
    avatar: "h-40 w-full object-cover",
    location: "flex items-start",
    cardIcon: "pointer-events-none font-extralight text-text-default-default",
  },
});

const { avatar, cardIcon, location, root } = cardVariants();

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

const Location = ({
  className,
  icon,
  iconSize = SIZE.LARGE,
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

export const Card = {
  Root,
  Avatar,
  Location,
};

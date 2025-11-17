import { Avatar, BrandLogo } from "@/components";

export const Header = () => {
  return (
    <header className="border-b-2 px-6 text-text-brand-on-brand md:px-12 lg:px-24">
      <div className="mx-auto flex h-21 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-background-brand-default p-2">
            <BrandLogo />
          </div>
          <div>
            <h2 className="text-text-brand-on-brand-secondary">HealthConnect</h2>
            <span className="font-extralight text-text-brand-on-brand-secondary">
              Find your healthcare provider
            </span>
          </div>
        </div>
        <Avatar initials="WK" />
      </div>
    </header>
  );
};

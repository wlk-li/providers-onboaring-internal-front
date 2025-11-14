import { Avatar } from "@/components";

export const Header = () => {
  return (
    <header className="bg-background-brand-default px-6 text-text-brand-on-brand md:px-12 lg:px-24">
      <div className="mx-auto flex h-21 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <img alt="" className="h-8 w-8 flex-shrink-0" src="./logo2.svg" />
          <div>
            <h2 className="">HealthConnect</h2>
            <span>Find your healthcare provider</span>
          </div>
        </div>
        <Avatar initials="WK" />
      </div>
    </header>
  );
};

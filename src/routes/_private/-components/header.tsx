import { Avatar, BrandLogo, TextStack } from "@/components";

export const Header = () => {
  return (
    <header className="border-b-2 px-6 text-text-brand-on-brand md:px-12 lg:px-24">
      <div className="mx-auto flex h-21 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-background-brand-default p-2">
            <BrandLogo />
          </div>

          <TextStack.Wrapper>
            <TextStack.Text className="text-lg text-text-brand-on-brand-secondary">
              HealthConnect
            </TextStack.Text>
            <TextStack.Subtext className="text-base text-text-brand-on-brand-secondary">
              Find your healthcare provider
            </TextStack.Subtext>
          </TextStack.Wrapper>
        </div>
        <Avatar initials="WK" />
      </div>
    </header>
  );
};

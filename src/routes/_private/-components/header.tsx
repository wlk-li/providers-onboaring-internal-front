export const Header = () => {
  return (
    <header className="flex h-21 items-center justify-between bg-background-brand-default px-6 text-text-brand-on-brand">
      <div className="flex items-center gap-3">
        <img alt="" className="h-8 w-8 flex-shrink-0" src="./logo2.svg" />
        <div>
          <h1>Health Connect</h1>
          <p>Find your healthcare provider</p>
        </div>
      </div>
      <img alt="" className="h-8 w-8 flex-shrink-0" src="./logo2.svg" />
    </header>
  );
};

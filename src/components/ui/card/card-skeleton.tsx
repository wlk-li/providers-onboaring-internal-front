import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border-default-default bg-background-default-default shadow-sm">
      <Skeleton className="h-40 w-full rounded-none" />

      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-2/3" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

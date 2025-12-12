import { useQuery } from "@tanstack/react-query";

import type { UseQueryProps } from "@/services/types";
import { queries } from "./factories";
import type { ProviderRequestParams } from "./types";

export const useProvidersListQuery = (
  params?: ProviderRequestParams,
  props?: UseQueryProps<typeof queries.list>,
) => {
  return useQuery({ ...queries.list(params), ...props });
};

export const useProviderDetailQuery = (
  id: number,
  props?: UseQueryProps<typeof queries.detail>,
) => {
  return useQuery({
    ...queries.detail(id),
    enabled: !!id,
    ...props,
  });
};

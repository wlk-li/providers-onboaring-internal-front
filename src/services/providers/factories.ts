import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getProvider, getProvidersList } from "./api";

export const queries = createQueryKeys("providers", {
  list: (params?: Parameters<typeof getProvidersList>[0]) => {
    return {
      queryKey: [params ?? {}],
      queryFn: () => {
        return getProvidersList(params);
      },
    };
  },
  detail: (id: number) => {
    return {
      queryKey: [id],
      queryFn: () => {
        return getProvider(id);
      },
    };
  },
});

// export const mutations = {};

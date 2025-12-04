import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getAllProviders, getProvider, getProvidersList } from "./api";

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
  all: () => {
    return {
      queryKey: ["/"],
      queryFn: () => {
        return getAllProviders();
      },
    };
  },
});

// export const mutations = {};

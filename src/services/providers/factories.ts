import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getProvider, getProvidersList } from "./api";

export const queries = createQueryKeys("providers", {
  list: (params) => {
    return {
      queryKey: [params],
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

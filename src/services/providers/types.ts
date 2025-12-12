import type { z } from "zod";

import type { RequestParams } from "../types";
import type { GENDER_FILTER, PROVIDERS_FILTER_KEYS } from "./constants";
import type { providerFiltersSchema, providerSchema, providersListSchema } from "./schemas";

export type Provider = z.infer<typeof providerSchema>;
export type ProvidersList = z.infer<typeof providersListSchema>;

export type ProviderFilterKey = (typeof PROVIDERS_FILTER_KEYS)[keyof typeof PROVIDERS_FILTER_KEYS];
// export type ProviderFilters = Partial<Record<ProviderFilterKey, string | number | boolean>>;

export type GenderFilter = (typeof GENDER_FILTER)[keyof typeof GENDER_FILTER];

export type ProviderFilters = z.infer<typeof providerFiltersSchema>;
export type ProviderRequestParams = RequestParams<ProviderFilters>;

export type PaginationLink = {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
};

export type PaginationMeta = {
  currentPage: number;
  from: number;
  lastPage: number;
  links: PaginationLink[];
  path: string;
  perPage: number;
  to: number;
  total: number;
};

export type ProvidersResponse = {
  data: ProvidersList;
  meta: PaginationMeta;
};

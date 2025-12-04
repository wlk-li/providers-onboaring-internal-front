import { publicApi } from "@/config/api";
import { parsePaginatedResponse } from "@/services/schemas";
import { providerSchema, providersListSchema } from "./schemas";
import type { Provider, ProviderFilters, ProviderRequestParams } from "./types";

const buildFilterParams = (
  filter?: ProviderFilters,
): Record<`filter[${string}]`, string | number | boolean> => {
  if (!filter) {
    return {};
  }

  const params: Record<`filter[${string}]`, string | number | boolean> = {};
  Object.entries(filter).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params[`filter[${key}]`] = value;
    }
  });

  return params;
};

export const getProvidersList = async ({ filter, page }: ProviderRequestParams = {}) => {
  const response = await publicApi.get("providers", {
    params: {
      page,
      ...buildFilterParams(filter),
    },
  });

  return parsePaginatedResponse(providersListSchema, response.data);
};

export const getProvider = async (id: Provider["id"]) => {
  const response = await publicApi.get(`providers/${id}`);

  return providerSchema.parse(response.data);
};

export const getAllProviders = async () => {
  const response = await publicApi.get("providers");

  return parsePaginatedResponse(providersListSchema, response.data);
};

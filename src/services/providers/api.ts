import { publicApi } from "@/config/api";
import { parsePaginatedResponse } from "@/services/schemas";
import { providerSchema, providersListSchema } from "./schemas";
import type { Provider, ProviderRequestParams } from "./types";

export const getProvidersList = async ({ filter, page }: ProviderRequestParams = {}) => {
  const response = await publicApi.get("providers", {
    params: {
      page,
      filter,
    },
  });

  return parsePaginatedResponse(providersListSchema, response.data);
};

export const getProvider = async (id: Provider["id"]) => {
  const response = await publicApi.get(`providers/${id}`);

  console.log("Raw API response:", response);
  console.log("Response.data:", response.data);

  const parsed = providerSchema.parse(response.data?.data);
  console.log("Parsed data:", parsed);

  return parsed;
};

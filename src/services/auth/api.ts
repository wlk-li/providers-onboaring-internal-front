import { publicApi } from "@/config/api";
import type { LoginPayload, LoginResponse } from "./types";

export const login = async ({ email, password }: LoginPayload): Promise<LoginResponse> => {
  const response = await publicApi.post<{
    data: {
      access_token: string;
      token_type: string;
      expires_in: number;
    };
  }>("auth/login", { email, password });

  return {
    accessToken: response.data.data.access_token,
    tokenType: response.data.data.token_type,
    expiresIn: response.data.data.expires_in,
  };
};

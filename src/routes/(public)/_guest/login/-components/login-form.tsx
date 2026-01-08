import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components";
import { useLogin } from "@/services/auth/actions";
import { getLoginPayloadSchema } from "@/services/auth/schemas";
import type { LoginPayload } from "@/services/auth/types";
import { setAuthStoreToken } from "@/stores/use-auth-store";

export const LoginForm = () => {
  const loginPayloadSchema = getLoginPayloadSchema();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginPayloadSchema),
  });

  const { isPending, mutate: login } = useLogin({
    onSuccess: (data) => {
      setAuthStoreToken(data.accessToken);
    },
  });

  const onSubmit = (data: LoginPayload) => {
    login(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm text-gray-500">Enter your credentials to sign in</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            id="email"
            placeholder="you@example.com"
            type="email"
          />
          {errors.email ? (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            id="password"
            placeholder="••••••••"
            type="password"
          />
          {errors.password ? (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          ) : null}
        </div>

        <Button disabled={isPending} type="submit" variant="primary">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
};

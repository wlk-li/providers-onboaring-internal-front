import { useProviderDetailQuery } from "@/services/providers/actions";
// import { PROVIDERS_FILTER_KEYS } from "@/services/providers/constants";

export const QueryTest = () => {
  const { data, isLoading } = useProviderDetailQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log(data);
  }

  return <div>{data?.name}</div>;
};

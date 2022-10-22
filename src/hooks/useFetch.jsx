import { useQuery } from "@tanstack/react-query";
import supabase from "../core/supabase";

function useFetch({ module }) {
  const query = useQuery([module], () => supabase.from(module).select("*"), {
    enabled: true,
  });
  const items = query.data?.data;
  return { items: items, ...query };
}

export default useFetch;

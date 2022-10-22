import { useQuery } from "@tanstack/react-query";
import supabase from "../core/supabase";

function useFetchBy({ module, filter, params }) {
  const query = useQuery([module, filter, params], () =>
    supabase.from(module).select("*").eq(`${filter}`, `${params}`)
  );
  const items = query.data?.data;
  return { items: items, ...query };
}

export default useFetchBy;

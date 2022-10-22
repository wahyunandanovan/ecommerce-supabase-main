import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../core/supabase";

function useDelete({ module, key, value }) {
  const client = useQueryClient();
  const mutation = useMutation(
    [module],
    (values) => {
      return supabase.from(module).delete().eq(key, value);
    },
    {
      onSuccess: (res) => {
        if (res.error !== null) {
        }
        if (res.error === null) {
          client.invalidateQueries(module);
        }
      },
    }
  );
  return mutation;
}

export default useDelete;

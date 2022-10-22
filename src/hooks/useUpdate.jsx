import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../core/supabase";

function useUpdate({ module, key, value }) {
  const client = useQueryClient();

  const mutation = useMutation(
    (values) => {
      return supabase.from(module).update(values).eq(key, value);
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

export default useUpdate;

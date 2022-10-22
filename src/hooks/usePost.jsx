import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../core/supabase";

function usePost({ module }) {
  const client = useQueryClient();

  const mutation = useMutation(
    (values) => {
      return supabase.from(module).insert(values);
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

export default usePost;

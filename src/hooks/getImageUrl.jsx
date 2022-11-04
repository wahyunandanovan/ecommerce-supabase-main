import supabase from "../core/supabase";

export default function getImageUrl(key, value) {
  return `${supabase.storage.from(key).getPublicUrl(value).data.publicUrl}`;
}

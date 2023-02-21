import { createClient } from "@supabase/supabase-js";

const isDevelopment = import.meta.env.MODE === "development";

const SUPABASE_URL = isDevelopment
  ? import.meta.env.VITE_SUPABASE_URL
  : process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = isDevelopment
  ? import.meta.env.VITE_SUPABASE_KEY
  : process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: localStorage,
  detectSessionInUrl: false,
});

export default supabase;

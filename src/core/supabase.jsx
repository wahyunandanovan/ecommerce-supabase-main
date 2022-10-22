import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uucminkkoxctdtnlzwmo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Y21pbmtrb3hjdGR0bmx6d21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5NzgxNTYsImV4cCI6MTk4MTU1NDE1Nn0.0Hsyl2187D6jMpApeyfpJTmGSXXUxtVs1pcighPUoJc";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: localStorage,
  detectSessionInUrl: false,
});

export default supabase;

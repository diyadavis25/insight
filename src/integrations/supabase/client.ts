import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://vylavcnonjvvsawdjlgt.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_TlDM1r2iYL5VwYTovAN_lQ_MBBztmBJ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

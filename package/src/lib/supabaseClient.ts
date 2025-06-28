import { createClient } from '@supabase/supabase-js';

// Make sure to install '@supabase/supabase-js' with: npm install @supabase/supabase-js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 
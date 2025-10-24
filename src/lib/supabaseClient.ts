import { createClient } from '@supabase/supabase-js';

// Hard-coded Supabase configuration
const SUPABASE_URL = 'https://xaewomwwfbkvtwfljdcx.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXdvbXd3ZmJrdnR3ZmxqZGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzg1MzMsImV4cCI6MjA3NjgxNDUzM30.C9JEWV-XvELgT8Nus_t-t4qz1UWyVuitZJ_854VlDLY';

/**
 * A Supabase client configured with the project URL and anonymous key. This
 * client is safe to expose in frontend code because it respects row-level
 * security policies configured in the database.
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

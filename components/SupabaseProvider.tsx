import '@/app/globals.css';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState, PropsWithChildren } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const AuthContext = React.createContext<{ session: Session | null }>({ session: null });

export default function SupabaseProvider({ children }: PropsWithChildren<{}>) {
  const [session, setSession] = useState<Session | null>(null);
  const supabaseClient = createClientComponentClient();

  useEffect(() => {
    // Get initial session
    supabaseClient.auth.getSession().then(({ data: { session } }) => setSession(session));
    // Listen for auth changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
}

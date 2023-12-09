import React, { createContext, useState, useEffect } from 'react';

import { Session, User } from '@supabase/supabase-js';
import supabase from '../utils/supabase';
type ContextProps = {
  user: User | null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  // user null = loading
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function Auth() {
      const newSession = await supabase.auth.getSession();
      setSession(newSession.data.session);
      setUser(session?.user);

      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (_event, session) => {
          setSession(session);
          setUser(session?.user);
        }
      );

      return () => {
        authListener?.subscription.unsubscribe();
      };
    }

    Auth();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

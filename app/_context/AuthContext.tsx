"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { User } from "@/lib/api/types/customerTypes/customerTypes";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isSessionActive: boolean;
  resetUser: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isSessionActive: false,
  resetUser: () => {},
});

export const AuthProvider = ({
  children,
  user: initialUser,
}: {
  children: React.ReactNode;
  user: User | null;
}) => {
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  const resetUser = () => {
    setUser(null);
  };

  useEffect(() => {
    if (!initialUser) {
      resetUser();
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [initialUser]);

  return (
    <AuthContext.Provider
      value={{ user, loading, resetUser, isSessionActive: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

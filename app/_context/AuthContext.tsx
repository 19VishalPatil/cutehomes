"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = { id: string; email: string; role: "customer" | "admin" };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  resetUser: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  resetUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
        { credentials: "include" } // send cookies
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const resetUser = () => {
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, resetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

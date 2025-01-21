import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "./authContext";

export interface User {
  token: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticatedState] = useState<boolean>(false);

  // Helper functions to handle cookies
  const setUser = (user: User | null) => {
    if (user) {
      Cookies.set("user", JSON.stringify(user), { expires: 7 }); // Store user for 7 days
    } else {
      Cookies.remove("user");
    }
    setUserState(user);
  };

  const setIsAuthenticated = (auth: boolean) => {
    Cookies.set("isAuthenticated", auth ? "true" : "false", { expires: 7 });
    setIsAuthenticatedState(auth);
  };

  useEffect(() => {
    const userCookie = Cookies.get("user");
    const authCookie = Cookies.get("isAuthenticated");

    if (userCookie) {
      setUserState(JSON.parse(userCookie));
    }
    if (authCookie) {
      setIsAuthenticatedState(authCookie === "true");
    }
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = { user, isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

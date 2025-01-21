/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { User } from "./authProvider";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

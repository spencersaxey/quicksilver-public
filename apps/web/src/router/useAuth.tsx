import React from "react";
import { AuthContext } from "./authContext";

export function useAuth() {
  return React.useContext(AuthContext);
}

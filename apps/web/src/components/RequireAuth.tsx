import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../router/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

export function RequireAuth() {
  const auth = useAuth();
  useEffect(() => {
    if (!auth.user) {
      toast("Goodbye", {
        icon: "👋",
        position: "bottom-center",
      });
    }
  }, [auth]);
  if (!auth.user) return <Navigate replace to="/" />;

  return <Outlet />;
}

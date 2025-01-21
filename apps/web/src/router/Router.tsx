import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { AuthProvider } from "./authProvider";
import { Landing } from "../pages/Landing";
import { RequireAuth } from "../components/RequireAuth";
import { Sunshine } from "../pages/Sunshine";
import { Rainbow } from "../pages/Rainbow";
import { Storm } from "../pages/Storm";

export function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/storm" element={<Storm />} />
            <Route path="/sunshine" element={<Sunshine />} />
            <Route path="/rainbow" element={<Rainbow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

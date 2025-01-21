import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../router/useAuth";
import { axiosClient } from "../util/axiosClient";
import toast from "react-hot-toast";
import key from "../assets/key-alt-svgrepo-com.svg";

export function Login() {
  const auth = useAuth();
  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { data } = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      auth.login({ token: data.access_token });
      toast("Welcome", {
        icon: "😊",
        position: "bottom-center",
      });
    } catch {
      toast("Failed to Login", {
        icon: "❌",
      });
    }
  }

  return auth.isAuthenticated ? (
    <Navigate replace to="/storm" />
  ) : (
    <div className="loginCard">
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <input
          className="loginInput"
          placeholder="email"
          name="email"
          type="text"
        ></input>
        <input
          className="loginInput"
          placeholder="password"
          name="password"
          type="password"
        ></input>
        <br />
        <button className="loginButton" type="submit">
          <img src={key}></img>
        </button>
        <div className="cancel">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

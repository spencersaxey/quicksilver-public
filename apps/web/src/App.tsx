import { Toaster } from "react-hot-toast";
import "./App.css";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;

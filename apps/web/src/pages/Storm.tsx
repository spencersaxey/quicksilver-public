import { Nav } from "../components/Nav";
import cloud from "../assets/cloud-bolt-svgrepo-com.svg";

export function Storm() {
  return (
    <div>
      <Nav />
      <h1>Storm (Protected Page 1)</h1>
      <img src={cloud}></img>
    </div>
  );
}

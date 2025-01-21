import { Nav } from "../components/Nav";
import cloud from "../assets/cloud-rainbow-svgrepo-com.svg";

export function Rainbow() {
  return (
    <div>
      <Nav />
      <h1>Rainbow (Protected Page 3)</h1>
      <img src={cloud}></img>
    </div>
  );
}

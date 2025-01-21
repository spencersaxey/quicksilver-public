import { Nav } from "../components/Nav";
import cloud from "../assets/cloud-sun-alt-svgrepo-com.svg";

export function Sunshine() {
  return (
    <div>
      <Nav />
      <h1>Sunshine (Protected Page 2)</h1>
      <img src={cloud}></img>
    </div>
  );
}

import { Nav } from "../components/Nav";
import cloud from "../assets/cloud-rain-alt-1-svgrepo-com.svg";

export function Landing() {
  return (
    <div>
      <Nav />
      <h1>Rain (Landing Page)</h1>
      <img src={cloud}></img>
    </div>
  );
}

import { Outlet, useLoaderData } from "react-router-dom";
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";
import { mainLoader } from "../loaders/main";

function Main() {
  const { username } = useLoaderData() as ReturnType<typeof mainLoader>;
  return (
    <div className="layout">
      <Nav username={username} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="Person waving" />
    </div>
  );
}
export default Main;

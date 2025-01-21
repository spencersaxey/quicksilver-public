import { useLocation } from "react-router-dom";
import { useAuth } from "../router/useAuth";
import icon from "../assets/square-user-svgrepo-com.svg";
import exit from "../assets/arrow-right-from-bracket-svgrepo-com.svg";
import hamburger from "../assets/menu-alt-1-svgrepo-com.svg";
import close from "../assets/close-ellipse-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

interface LinkedRoute {
  route: string;
  label: JSX.Element;
}

const protectedRoutes: Array<LinkedRoute> = [
  {
    route: "/storm",
    label: (
      <div className="navItem">
        <p>Storm</p>
      </div>
    ),
  },
  {
    route: "/sunshine",
    label: (
      <div className="navItem">
        <p>Sunshine</p>
      </div>
    ),
  },
  {
    route: "/rainbow",
    label: (
      <div className="navItem">
        <p>Rainbow</p>
      </div>
    ),
  },
];

export function Nav() {
  const auth = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile =
        window.innerWidth <= 800 || window.innerHeight <= 600;
      setIsMobile(currentIsMobile);
    };
    handleResize(); //run on load
    window.addEventListener("resize", handleResize, false);
  }, []);

  const closeNav = () => {
    const nav = document.getElementById("nav")!;
    nav.style.width = "0px";
    setIsOpen(false);
  };
  return (
    <>
      <div id="nav" className="mobileNav">
        {auth.isAuthenticated &&
          protectedRoutes.map((pr) => {
            return (
              <NavLink
                onClick={() => {
                  closeNav();
                }}
                path={pr.route}
                children={pr.label}
              />
            );
          })}
        {auth.isAuthenticated ? (
          <NavLink
            onClick={() => {
              closeNav();
              auth.logout();
            }}
            path={pathname}
            children={
              <div className="navItem">
                <p>Logout</p>
                <img className="navIcon" src={exit}></img>
              </div>
            }
          />
        ) : (
          <NavLink
            onClick={closeNav}
            path={"/login"}
            children={
              <div className="navItem">
                <p>Login</p>
                <img className="navIcon" src={icon} alt=""></img>
              </div>
            }
          />
        )}
        {isOpen && (
          <NavLink
            className="closeMenuIcon"
            onClick={closeNav}
            path={pathname}
            children={<img src={close}></img>}
          />
        )}
      </div>
      {!isOpen && (
        <NavLink
          className="menuIcon"
          onClick={() => {
            const nav = document.getElementById("nav")!;
            if (!isMobile) nav.style.width = "350px";
            else nav.style.width = "250px";
            setIsOpen(true);
            return;
          }}
          path={pathname}
          children={<img src={hamburger}></img>}
        />
      )}
    </>
  );
}

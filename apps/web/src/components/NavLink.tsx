import { Link } from "react-router-dom";
import { makeId } from "../util/stringUtil";

interface NavLinkProps {
  onClick?: () => void;
  className?: string;
  path: string;
  children: string | JSX.Element | JSX.Element[];
}

export function NavLink(props: NavLinkProps) {
  let { onClick, className } = props;
  const { path, children } = props;
  if (!onClick) onClick = () => {};
  if (!className) className = "navLink";
  return (
    <Link
      className={className}
      onClick={() => onClick()}
      to={path}
      id={`nav${makeId(3)}`}
    >
      {children}
    </Link>
  );
}

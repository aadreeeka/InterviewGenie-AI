import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <img
        src="/assets/svg/logo.png"
        alt="Logo"
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
};

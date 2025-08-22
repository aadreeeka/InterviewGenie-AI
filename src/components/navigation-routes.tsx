import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

export const NavigationRoutes = ({
  isMobile = false,
}: NavigationRoutesProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "items-start flex-col gap-8"
      )}
    >
      {MainRoutes.map((route) => (
        <NavLink
  key={route.href}
  to={route.href}
 className={({ isActive }) =>
  cn(
    "relative text-base text-neutral-600 transition duration-300", // base styles
    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-teal-800 after:transition-all after:duration-300 hover:after:w-full", // underline animation with teal
    isActive && "text-neutral-900 font-semibold after:w-full" // active state
  )
}
>
  {route.label}
</NavLink>
      ))}
    </ul>
  );
};
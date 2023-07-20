import Link from "next/link";
import NavbarBrand from "./navbar-brand";
import { ToggleMobile } from "./toggle-mobile";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const NavbarMain = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center mx-0 sm:mx-4 sm:mt-2 mt-0 md:mt-4 bg-white navbar-shadow sm:rounded-full p-3">
          {/* Brand */}
          <NavbarBrand />

          {/* NAV */}

          {/* Button */}
          <div className="hidden md:flex">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "gradient",
                  size: "lg",
                  className: "px-6 rounded-full",
                })
              )}
            >
              Get In Touch
            </Link>
          </div>

          {/* Toggle Mobile */}
          <div className="flex md:hidden">
            <ToggleMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;

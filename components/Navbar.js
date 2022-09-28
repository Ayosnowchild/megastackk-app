import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  const currentLink = router.pathname;
  const activeLink = "font-semibold text-xs xl:text-base";
  const inactiveLink = "text-gray-500 font-semibold text-xs xl:text-base";
  return (
    <nav className=" bg-[#FAFAFA] fixed flex justify-between  items-center overscroll-contain w-full py-4 px-6 md:px-22 xl:py-6 xl:px-32 h-16 xl:h-24">
      <div>
        <Link href="/">
          <a>
            <img
              src="/Logo-9 1.svg"
              alt="action"
              className=" w-128 h-32 xl:w-173 xl:44"
              width="173px"
              height="44px"
            />
          </a>
        </Link>
      </div>
      <div className=" hidden md:flex md:gap-4 xl:flex xl:gap-8">
        <Link href="/">
          <a className={currentLink === "/" ? activeLink : inactiveLink}>
            Home
          </a>
        </Link>
        <Link href="/AboutUs">
          <a className={currentLink === "/AboutUs" ? activeLink : inactiveLink}>
            About Us
          </a>
        </Link>
        <Link href="/case-study">
          <a
            className={
              currentLink === "/case-study" ? activeLink : inactiveLink
            }
          >
            Our Work
          </a>
        </Link>
        <Link href="/contact-us">
          <a
            className={
              currentLink === "/contact-us" ? activeLink : inactiveLink
            }
          >
            Lets Talk
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

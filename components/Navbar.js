import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  const currentLink = router.pathname;
  const activeLink = "font-semibold text-[8px] md:text-xs xl:text-sm";
  const inactiveLink =
    "text-gray-500 font-semibold text-[8px] md:text-xs xl:text-sm";
  return (
    <nav
      className={
        " bg-[#FAFAFA] fixed flex justify-between  items-center overscroll-none w-full py-4 px-6 md:px-22 xl:py-6 xl:px-32 h-16 xl:h-24"
      }
    >
      <div className=" flex justify-between w-full relative lg:w-1/2">
        <Link className=" inline-block mr-4 py-2 whitespace-nowrap" href="/">
          <a>
            <img
              src="/Logo-9 1.svg"
              alt="action"
              className=" w-128 h-32 xl:w-173 xl:44"
              width="128px"
              height="44px"
            />
          </a>
        </Link>
        <button
          className="  lg:hidden cursor-pointer px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5H17H1ZM1 1.5H17H1ZM1 7.5H17H1Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          " lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
      >
        <div
          className={
            " flex flex-col mt-16 lg:mt-0 lg:flex-row list-none lg:ml-auto gap-2 lg:gap-4 " +
            (navbarOpen ? " absolute right-[48px] top-[0.1px]" : " relative")
          }
        >
          <Link href="/">
            <a className={currentLink === "/" ? activeLink : inactiveLink}>
              Home
            </a>
          </Link>
          <Link href="/AboutUs">
            <a
              className={currentLink === "/AboutUs" ? activeLink : inactiveLink}
            >
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
      </div>
    </nav>
  );
}

export default Navbar;

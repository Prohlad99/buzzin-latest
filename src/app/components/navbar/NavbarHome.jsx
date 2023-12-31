"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const NavbarHome = () => {
  return (
    <div>
      <Navbar className="bg-stone-600 h-[70px] p-0 " fluid>
        <Navbar.Brand as={Link} href="/">
          <img
            className="h-[60px] w-full"
            src="/assets/icons/buzzin-04.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle className="text-white  outline-none hover:bg-transparent" />
        <Navbar.Collapse className="bg-stone-600 z-10 md:border-none sm:border-none border-t-[1px] border-blue-600 w-full">
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="/"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="about"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="members"
          >
            Our Team
          </Navbar.Link>
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="/"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="all_blogs"
          >
            Blog
          </Navbar.Link>
          <Navbar.Link
            className="text-white sm:text-lg md:xl hover:bg-blue-400"
            as={Link}
            href="contact"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHome;

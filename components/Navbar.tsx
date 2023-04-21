import React, { useState } from "react";
import Logo from "../public/Aloha.png";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container mx-auto relative">
      <nav className={styles.navbarmain}>
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={94}
              height={35}
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex">
            <ul className="hidden md:flex items-center gap-10">
              <li
                className="hover:border-b text-base"
                style={{ color: "var(--black-1)" }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="hover:border-b text-base"
                style={{ color: "var(--black-1)" }}
              >
                <Link href="/">Surfing</Link>
              </li>
              <li
                className="hover:border-b text-base"
                style={{ color: "var(--black-1)" }}
              >
                <Link href="/">Hula</Link>
              </li>
              <li
                className="hover:border-b text-base"
                style={{ color: "var(--black-1)" }}
              >
                <Link href="/">Vulcano</Link>
              </li>
              <li className={styles.navbarbtn}>
                <Link href="/" className="text-base text-white">
                  Book a trip
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed right-0 top-0 w-[90%] md:hidden h-screen p-10 ease-in duration-500 bg-white"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul className="">
              <li
                className="py-4 cursor-pointer "
                style={{ color: "var(--black-1)" }}
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="py-4 cursor-pointer "
                style={{ color: "var(--black-1)" }}
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/">Surfing</Link>
              </li>
              <li
                className="py-4 cursor-pointer "
                style={{ color: "var(--black-1)" }}
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/">Hula</Link>
              </li>
              <li
                className="py-4 cursor-pointer "
                style={{ color: "var(--black-1)" }}
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/">Vulcano</Link>
              </li>
              
              <li
                className="py-4 text-base text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/Book a trip" className={styles.navbarbtn}>
                  Book a trip
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className="mx-auto px-4">
        <div className="flex justify-evenly items-center w-full">
          <div className="flex justify-evenly items-center w-72">
            <Image src={"/logo.jpeg"} width={70} height={70} />
            <p className="w-full font-normal text-center ">
              Emaan Institute of Management and Sciences
            </p>
          </div>

          <div className="flex items-center h-24 font-semibold text-pink ">
            <a
              className="hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              Home
            </a>
            <a
              className=" hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              About
            </a>
            <a
              className="hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              Department
            </a>
            <a
              className=" hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              Available Programs
            </a>
            <a
              className=" hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              Academics
            </a>
            <a
              className="hover:text-darkpink px-3 py-2 rounded-md text-sm "
              href="/"
            >
              Contact us
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

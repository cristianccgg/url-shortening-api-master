import React, { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/public/images/logo.svg"
                alt="Your Company"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:ml-32 sm:items-center sm:justify-between w-full">
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Features
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium">
                Resources
              </a>
            </div>
            <div className="ml-4 flex space-x-4">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium"
              >
                Login
              </a>
              <button className="bg-1-Cyan rounded-full text-white font-semibold px-5 py-2">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-none relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed.
              Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={mobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={mobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={mobileMenuOpen ? "sm:hidden block" : "sm:hidden hidden"}
          id="mobile-menu"
        >
          <div className="space-y-1 p-8 flex flex-col items-center bg-2-Dark-Violet rounded-xl mx-5">
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Features
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:text-white"
            >
              Resources
            </a>
            <hr className="w-full border-1-Cyan" />
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:text-white"
            >
              Login
            </a>
            <button className="bg-1-Cyan rounded-full text-white font-semibold px-5 py-2 w-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

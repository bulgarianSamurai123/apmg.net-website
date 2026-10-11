import React from "react";
import Button from "./Button.js";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between mx-20 my-5 px-6 py-5 bg-card-white-color border-card-border-color border rounded-full">
      <div>
        <a href="/" className="font-bold text-lg">
          APMG.<span className="text-accent-text-color">NET</span>
        </a>
      </div>
      <ul className="flex items-center justify-between space-x-4">
        <li>
          <a className="navLink" href="/services">
            Services
          </a>
        </li>
        <li>
          <a className="navLink" href="/work">
            Work
          </a>
        </li>
        <li>
          <a className="navLink" href="/process">
            Process
          </a>
        </li>
        <li>
          <a className="navLink" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="navLink" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <Button>Get Started</Button>
    </nav>
  );
};

export default NavBar;

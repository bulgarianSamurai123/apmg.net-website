import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row gap-96 justify-center text-center pt-32 mx-20 mb-10">
      <p className="font-jakarta-sans text-sm text-storm-gray">© APMG.NET</p>
      <span className="flex flex-row gap-2">
        <p className="font-jakarta-sans text-sm text-storm-gray">[EMAIL]</p>
        <a
          className="font-jakarta-sans text-sm text-storm-gray hover:underline"
          href="https://www.linkedin.com/company/apmg-net-ltd/posts/?viewAsMember=true"
        >
          LINKEDIN
        </a>
        <p className="font-jakarta-sans text-sm text-storm-gray hover:underline">[GITHUB]</p>
      </span>
      <span className="flex flex-row gap-2">
        <Link className="font-jakarta-sans text-sm text-storm-gray hover:underline" href={"/"}>Privacy</Link>
        <Link className="font-jakarta-sans text-sm text-storm-gray hover:underline" href={"/"}>Terms</Link>
      </span>
    </div>
  );
};

export default Footer;

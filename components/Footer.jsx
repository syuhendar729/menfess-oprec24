// For support me, please do not edit the footer :)
/* ~made by <Link className="underline" href="https://github.com/kungs66" ref={refs} passHref>kungs</Link>~ */
import Link from "next/link";
import {  useRef } from "react";

const Footer = () => {
  const refs = useRef();
  return (
    <footer>
      <h1 className="text-xs font-medium text-center py-6 text-[#50555e]">
        ~ made by Syuhendar ~
      </h1>
    </footer>
  );
};

export default Footer;

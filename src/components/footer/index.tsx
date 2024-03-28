import { TSocial } from "@/types";
import React from "react";

const Footer = ({ socials }: { socials: TSocial[] }) => {
  return (
    <div className="px-32 py-4 flex justify-between items-center ubuntu text-white">
      <span>© 2023 SinanTokmak. All rights reserved.</span>
      <div>
        <span>Privacy Policy</span>
        <span className="ml-8">Terms & Conditions</span>
      </div>
      <div className="flex gap-8">
        {socials &&
          socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="">
              {social.icon}
            </a>
          ))}
      </div>
      <span className="ml-8">Design By author</span>
    </div>
  );
};

export default Footer;

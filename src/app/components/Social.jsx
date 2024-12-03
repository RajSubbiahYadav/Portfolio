import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Ensure these icons are imported

const socials = [
  { icon: <FaGithub />, path: "https://github.com/" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/" }, // Correct import
  { icon: <FaInstagram />, path: "https://instagram.com/" },
];

function Social({ containerStyles, iconStyles }) {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    );
  
}

export default Social;

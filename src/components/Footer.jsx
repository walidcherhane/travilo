import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    const footerLinks = ['home','tours', 'contact', 'about']
  return (
    <>
      <footer className="p-4  bg-gray-50  mt-auto text-center  md:flex md:items-center md:justify-between md:p-6 ">
          <span className=" md:text-sm text-lg text-gray-500 sm:text-center  ">
           Travilo  All Rights Reserved 2021 
          </span>
          <ul className="flex flex-wrap justify-center  mt-3 text-sm  md:ml-auto  gap-4 text-gray-500  sm:mt-0">
              { footerLinks.map((link)=>(
                  <li key={link}>
                    <Link to={`/${link}`} className=" hover:underline  capitalize"> {link} </Link>
                  </li>
              ))}
          </ul>
      </footer>
    </>
  );
}

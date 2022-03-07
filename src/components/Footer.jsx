import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {

    const footerLinks = ['home','tours', 'contact', 'about']

  return (
    <>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
           Travilo, All Rights Reserved 2021 
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              { footerLinks.map((link)=>(
                  <li key={link}>
                    <Link to={`/${link}`} class="mr-4 hover:underline md:mr-6 capitalize"> {link} </Link>
                  </li>
              ))}
          </ul>
      </footer>
    </>
  );
}

import React, {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {XyzTransition} from "@animxyz/react";
import {Burger} from "@mantine/core";
import logo from "../assets/images/logo.svg";
import {useClickAway, useEventListener} from "ahooks";
import {Link, useLocation} from "react-router-dom";

export default function Nav() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const isSmallScreen = useMediaQuery({query: "(min-width: 360px)"});
  const isMidScreen = useMediaQuery({query: "(min-width: 768px)"});
  const nav = useRef();
  const location = useLocation();

  useClickAway(() => {
    setIsNavActive(false);
  }, nav);
  useEventListener("scroll", () => {
    const ClientScrollY = window.pageYOffset;
    setIsAtTop(ClientScrollY === 0 ? true : false);
    setIsNavActive(false);
  });

  useEffect(() => {
    setIsNavActive(false); 
  }, [location.pathname]);

  const navItems = ["home", "tours", "contact", "about"];
  return (
    <div className="fixed top-0 w-full  z-50 ">
      {isMidScreen ? (
        <nav className={`"nav   transition-all duration-500   ${isAtTop ? " bg-gradient-to-b from-gray-900 to-transparent" : " bg-gray-900/90  backdrop-blur-sm "}"`}>
          <div className="container mx-auto ">
            <div className="flex justify-between py-4 px-4 items-center">
              <div className="logo text-xl font-bold font-playfair text-gray-100 capitalize flex items-center">
                <img src={logo} alt="logo" /> Travilo
              </div>
              <ul className="flex text-gray-200  list-none gap-x-10  ">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link to={`/${item}`} className={`capitalize ${location.pathname.split("/")[1] === item && " nav__link-active"}  font-semibold`} >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        isSmallScreen && (
          <nav className={`"nav   transition-all duration-500   ${isAtTop ? " bg-gradient-to-b from-gray-900 to-transparent " : " bg-gray-900/90 "}"`}>
            <div className="container mx-auto  ">
              <div className="relative ">
                <div className="flex font-playfair  justify-between mx-6 text-center font-bold text-gray-100 text-2xl py-4 ">
                  Travilo
                  <div
                    onClick={() => {
                      setIsNavActive(!isNavActive);
                    }}
                    className="menu-icons fill-gray-100"
                  >
                    <Burger
                      color="#ffff"
                      opened={isNavActive}
                      onClick={() => {
                        setIsNavActive(!isNavActive);
                      }}
                      title={isNavActive ? "Close Navigation" : "Open Navigation"}
                    />
                  </div>
                </div>
                <XyzTransition xyz="fade right ">
                  {isNavActive && (
                    <ul ref={nav} className="absolute right-0 flex h-screen w-[80%]  bg-gray-900/90 backdrop-blur-sm p-8 gap-2 flex-col text-white font-bold  list-none gap-x-10">
                      {navItems.map((item) => (
                        <li key={item} className=" hover:bg-white hover:text-gray-900 transition-all">
                          <Link className="block w-full p-4 capitalize" to={`/${item}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </XyzTransition>
              </div>
            </div>
          </nav>
        )
      )}
    </div>
  );
}

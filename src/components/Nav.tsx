import {
  faBars,
  faClose,
  faHome,
  faMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Nav = () => {
  const navData = useSelector((state: any) => state.nav);
  const [animate, setAnimate] = useState({
    opacity: 0,
    display: "none",
    x: 1000,
  });
  return (
    <>
      {/* disktop nav */}
      <nav className="border-b-2 absolute  z-10 w-full navBar hidden md:block ">
        <div className="container mx-auto flex">
          <div className="w-1/12">
            <Link to="/" className="text-4xl ">
              <img src={navData.style.logo} width="70%"></img>
            </Link>
          </div>
          <div className="flex flex-col w-fit justify-center mx-5">
            <SocialLinks
              color={navData.style.color}
              textSized="text-xl"
            ></SocialLinks>
          </div>
          <div
            className="w-auto navItems flex"
            style={{ color: navData.style.color }}
          >
            <Link to="/" className="w-auto flex items-center">
              <span className="px-5">الرئيسية</span>
            </Link>
            <Link to="about" className="w-auto flex items-center">
              <span className="px-5">عنا</span>
            </Link>
            <Link to="contact" className="w-auto flex items-center">
              <span className="px-5">تواصل معنا</span>
            </Link>
            <Link to="courses" className="w-auto flex items-center">
              <span className="px-5">كورسات</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      <nav className="md:hidden z-10">
        <div
          className="container mx-auto flex flex-row items-center justify-start fixed"
          style={{ zIndex: 999 }}
        >
          <button
            className="w-fit py-5"
            onClick={() => {
              setAnimate({ opacity: 1, display: "flex", x: 0 });
            }}
          >
            <FontAwesomeIcon
              className="text-4xl cursor-pointer text-secondary"
              icon={faBars}
            ></FontAwesomeIcon>
          </button>
        </div>
        <motion.div
          style={{ zIndex: 999 }}
          initial={{ display: "none", x: 1000 }}
          animate={animate}
          transition={{
            duration: 1,
          }}
          className="bg-primary w-screen h-screen flex flex-col justify-center items-center  fixed"
        >
          <button
            onClick={() => {
              setAnimate({ opacity: 0, display: "flex", x: 1000 });
            }}
            className="p-5 absolute top-0 right-0 cursor-pointer"
          >
            <FontAwesomeIcon
              className="pl-3 text-5xl"
              icon={faClose}
            ></FontAwesomeIcon>
          </button>
          <div className="container mx-auto">
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon
                className="pl-3 text-3xl"
                icon={faHome}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                to="/"
                className="text-3xl"
              >
                الرئيسية{" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl"
                icon={faPhone}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                to="/contact"
                className="text-3xl"
              >
                تواصل معنا{" "}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center mt-5">
              <FontAwesomeIcon
                className="pl-3 text-3xl"
                icon={faMarker}
              ></FontAwesomeIcon>
              <Link
                onClick={() => {
                  setAnimate({ opacity: 0, display: "flex", x: 1000 });
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                to="/about"
                className="text-3xl"
              >
                عنا
              </Link>
            </div>
            <div className="mt-20">
              <SocialLinks color="white" textSized="text-5xl"></SocialLinks>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Nav;

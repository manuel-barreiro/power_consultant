"use client";

import { useState } from "react";
import { logoPower } from "@public";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";

const Nav = () => {
  /* state and handle function to display mobile menu */

  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prevState) => !prevState);
    console.log(showMenu);
  }

  /* ------------------------------------------------ */

  return (
    <nav className="font-montserrat flex justify-between items-center w-full h-20 lg:h-[12vh] sticky top-0 z-50 shadow-navbarShadow px-8 md:px-32 md:py-10 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="/">
          <Image
            src={logoPower}
            width={65}
            priority={true}
            title="Power Consultant Logo"
            alt="Power Consultant Logo"
          />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="flex justify-evenly items-center gap-10 font-medium">
          <Link
            href="/"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-primaryOrange 
                hover:text-primaryOrange
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Home
            </motion.li>
          </Link>
          <Link
            href="/productos"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-primaryOrange 
                hover:text-primaryOrange
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              Productos
            </motion.li>
          </Link>
          <Link
            href="/servicioTecnico"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-primaryOrange 
                hover:text-primaryOrange
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              Servicio técnico
            </motion.li>
          </Link>
          <Link href="/contacto">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <button
                className="px-4 py-2 rounded-md text-white bg-primaryOrange border border-primaryOrange hover:bg-white
                  hover:text-primaryOrange duration-300 w-full"
              >
                Contacto
              </button>
            </motion.li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}

      <motion.div
        onClick={handleShowMenu}
        className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-primaryOrange cursor-pointer overflow-hidden group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="w-full h-[2px] bg-primaryOrange inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        <span className="w-full h-[2px] bg-primaryOrange inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
        <span className="w-full h-[2px] bg-primaryOrange inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
      </motion.div>
      {showMenu && (
        <div className="absolute lg:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col col items-end">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-white flex flex-col items-center px-4 py-10 relative"
          >
            <MdOutlineClose
              onClick={handleShowMenu}
              className="text-3xl text-primaryOrange cursor-pointer hover:text-red-500 absolute top-4 right-4"
            />

            <div className="flex flex-col justify-center items-center text-base gap-7">
              <ul className="flex flex-col text-base gap-7">
                <Link
                  href="/"
                  onClick={handleShowMenu}
                  className="font-medium hover:text-primaryOrange hover:underline underline-offset-8 decoration-primaryOrange cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1,
                      ease: "easeIn",
                    }}
                  >
                    Home
                  </motion.li>
                </Link>
                <Link
                  href="/productos"
                  onClick={handleShowMenu}
                  className="font-medium hover:text-primaryOrange hover:underline underline-offset-8 decoration-primaryOrange cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.2,
                      ease: "easeIn",
                    }}
                  >
                    Productos
                  </motion.li>
                </Link>
                <Link
                  href="/servicioTecnico"
                  onClick={handleShowMenu}
                  className="font-medium hover:text-primaryOrange hover:underline underline-offset-8 decoration-primaryOrange cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.3,
                      ease: "easeIn",
                    }}
                  >
                    Servicio Técnico
                  </motion.li>
                </Link>
                <Link href="/contacto" onClick={handleShowMenu}>
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.4 }}
                  >
                    <button
                      className="px-4 py-2 rounded-md text-white bg-primaryOrange border border-primaryOrange hover:bg-white
                                            hover:text-primaryOrange duration-300 w-full"
                    >
                      Contacto
                    </button>
                  </motion.li>
                </Link>
              </ul>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
                className="flex gap-6"
              >
                <a
                  href="https://www.linkedin.com/company/power-consultant/"
                  target="_blank"
                >
                  <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/PowerConsultant"
                  target="_blank"
                >
                  <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  href="https://instagram.com/powerconsultantsa?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5491144940763&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FaWhatsapp />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

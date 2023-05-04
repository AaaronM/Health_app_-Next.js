"use client";

import React from "react";

import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function Footer() {
  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="p-5 align-middle  justify-center items-center mt-[100px] mb-[2px] overflow-hidden"
      >
        <div className="flex justify-evenly ">
          <div>
            <h2 className="text-[25px] font-bold mb-2">HEAL APP</h2>
            <p className=" text-gray-500 mb-1 text-[18px]">
              Doctors, medicines, testes - all in one service
            </p>
            <div className="flex mt-4 ">
              <p className="text-[35px] ">
                <AiFillLinkedin />
              </p>
              <p className="text-[35px] ">
                <AiFillFacebook />
              </p>
              <p className="text-[35px] ">
                <AiFillTwitterSquare />
              </p>
            </div>
          </div>
          {/* _____Menu_____ */}
          <div>
            <h2 className="mb-3">Menu</h2>
            <p className=" text-gray-500 mb-1 ">Services </p>
            <div className=" text-gray-500 ">
              <p className="mb-1">How it works</p>
              <p className="mb-1">Testimonial </p>
              <p className="mb-1">About us</p>
            </div>
          </div>
          {/* _____More info_____ */}

          <div>
            <h2 className="mb-3">More info</h2>
            <p className=" text-gray-500 mb-1"> Pricing </p>
            <div className=" text-gray-500">
              <p className="mb-1">FAQ</p>
              <p className="mb-1">Blog </p>
            </div>
          </div>
          {/* _____Contact_____ */}

          <div>
            <h2 className="mb-3">Contact</h2>
            <p className=" text-gray-500 mb-1"> heal@app.com </p>
            <div className=" text-gray-500">
              <p className="mb-1">1-888-548-3677</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

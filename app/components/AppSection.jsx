"use client";

import React from "react";

import { AiFillApple, AiFillStar } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

import iphone from "../../public/IMG/1.png";
import Image from "next/image";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function AppSection() {
  return (
    <div className="p-5 align-middle flex flex-col justify-center items-center ">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex mt-[150px] bg-[#F6F6F2] p-5 rounded-2xl"
      >
        <Image src={iphone} className="h-[820px] w-[500px] "></Image>
        <div className="text-3xl  justify-center p-5 mt-[96px]">
          <h2 className="text-[40px] font-bold mb-3 leading-snug">
            Treatment is easy with <br />
            <span className="italic">Heal app</span>
          </h2>
          <p className="text-[20px] font-reg mb-3">
            We are constantly expanding our services, and growing our team of
            highly qualified health professionals.
          </p>
          <div className="flex text-white ">
            <button className="border rounded-xl p-2 mr-5 flex align-middle items-center gap-2 bg-slate-950">
              <AiFillApple className=" w-5 h-5" />
              <p className="text-[15px]">App Store</p>
            </button>

            {/* ICON BRN */}

            <button className="border rounded-xl p-2 flex align-middle items-center gap-3 text-black">
              <FaGooglePlay className=" w-5 h-5" />
              <p className="text-[15px]">Google Play </p>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

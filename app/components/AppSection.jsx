"use client";

import React from "react";

import { AiFillApple, AiFillStar } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

import iphone2 from "../../public/IMG/phone2.png";
import Image from "next/image";

// ____parts___
import tung from "../../public/IMG/tung.png";
import smile from "../../public/IMG/smile.png";
import hand from "../../public/IMG/hand.png";
import feet from "../../public/IMG/feet.png";
import fingers from "../../public/IMG/fingers.png";
import feet2 from "../../public/IMG/feet2.png";
import eyes from "../../public/IMG/eyes.png";
import ear from "../../public/IMG/ear.png";
import stomach from "../../public/IMG/stomach.png";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function AppSection() {
  return (
    <div className="p-5 align-middle  justify-center items-center mt-[100px] mb-[200px]">
      <div className=" flex align-middle  justify-center items-center ">
        <h2 className="text-[45px] align-middle items-center text-center mt-[100px] mb-[50px] ">
          Treatment is easy with <br />
          <span className="italic">Heal app</span>
        </h2>
      </div>
      <div className="flex justify-center items-center gap-[40px] ">
        <div>
          {/* ________LEFT SIDE_________ */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex  "
          >
            <div className="flex justify-center items-center translate-y-[-50px]  ">
              <Image
                src={tung}
                className=" w-[100px] hover:scale-110 transition-all  "
              />
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Otolaryngologist
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center translate-x-[-80px]">
              <Image
                src={smile}
                className=" w-[100px] hover:scale-110 transition-all   "
              />
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Dental care
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center  translate-y-[80px]  translate-x-[-80px]">
              <Image
                src={hand}
                className=" w-[100px] hover:scale-110 transition-all   "
              />
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Orthopedist
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center  translate-y-[140px]  translate-x-[-20px]">
              <Image
                src={feet}
                className=" w-[100px] hover:scale-110 transition-all   "
              />
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Podiatrist
              </p>
            </div>
          </motion.div>
        </div>
        {/* ________LEFT SIDE_________ */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image src={iphone2} className=" w-[500px]  z-2  rounded-full" />
        </motion.div>
        {/* ________RIGHT SIDE_________ */}
        <div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center  translate-y-[-50px]  translate-x-[-30px]">
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Hand specialist
              </p>
              <Image
                src={fingers}
                className=" w-[100px] hover:scale-110 transition-all   "
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center   translate-x-[80px]">
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Optometrists
              </p>
              <Image
                src={eyes}
                className=" w-[100px] hover:scale-110 transition-all    "
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center translate-y-[80px]  translate-x-[80px]  ">
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Otolaryngologist
              </p>
              <Image
                src={ear}
                className=" w-[100px] hover:scale-110 transition-all    "
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="flex justify-center items-center translate-y-[140px]  translate-x-[-20px]">
              <p className=" font-bold border  p-2 rounded-2xl transition-all hover:scale-110 hover:bg-[#F6F6F2]   hover:border-black ">
                Gastroenterologist
              </p>
              <Image
                src={stomach}
                className=" w-[100px] hover:scale-110 transition-all    "
              />
            </div>
          </motion.div>
        </div>
        {/* ________RIGHT SIDE_________ */}
      </div>
    </div>
  );
}

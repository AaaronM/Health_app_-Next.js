"use client";
import React from "react";

import Pills from "../../public/IMG/Pills.png";
import Ambulance from "../../public/IMG/Ambulance.png";
import Bloodbag from "../../public/IMG/Blood bag.png";
import Image from "next/image";

import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function Service() {
  return (
    <div className="p-5 align-middle flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=" items-center text-center mt-20"
      >
        <h3 className=" text-[45px]">Services we provide</h3>
        <p className=" text-[18px] text-gray-500 mb-9">
          Provisional diagnosis, appointment of checkups, treatment <br /> plan
          and meds suggestions
        </p>
      </motion.div>
      <div className=" gap-4 flex flex-row justify-center relative ">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[400px] w-[350px] bg-black text-white p-8 rounded-2xl"
        >
          <div>
            <Image
              className=" absolute top-[320px] left-[220px] h-[120px] w-[120px]"
              src={Pills}
            ></Image>
            <h3 className=" text-3xl font-bold mb-5">Track symptoms</h3>
            <p className="text-lg text-gray-400 mb-5 ">
              We provide daily monitoring of activity indicators and remaining
              to take medicine according to the doctor's recommendations.
            </p>
            <button className="border rounded-3xl bg-white text-black p-2">
              Learn more
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[400px] w-[220px]  bg-neutral-200 text-white p-8 rounded-2xl "
        >
          <div>
            <h3 className=" text-3xl font-bold mb-5 text-black">
              Control of health data
            </h3>
            <p className="text-lg text-gray-900 mb-5 ">
              A ful cycle of diagnostics and doctor's appointments.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[400px] w-[350px] bg-[#F6F6F2] text-white p-8 rounded-2xl "
        >
          <div>
            <h3 className=" text-3xl font-bold mb-5 text-black">
              Feel better faster
            </h3>
            <p className="text-lg text-gray-900 mb-5 ">
              Get advice, treatment options and a prescription
            </p>
          </div>
          <Image
            className=" absolute top-[320px] right-[220px] h-[120px] w-[120px]"
            src={Ambulance}
          ></Image>

          <Image
            className=" absolute top-[112px] right-[320px] rotate-[33deg] h-[120px] w-[120px]"
            src={Bloodbag}
          ></Image>
        </motion.div>
      </div>
    </div>
  );
}

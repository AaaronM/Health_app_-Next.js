"use client";

import React from "react";

import Iphone3D from "../../public/IMG/Iphone3D.png";
import Image from "next/image";
import { AiFillApple, AiFillStar } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function Intrototheapp() {
  return (
    <div>
      <div className="p-5 align-middle flex flex-col justify-center items-center ">
        <Image src={Iphone3D} className="h-[820px] w-[500px] "></Image>
      </div>
    </div>
  );
}

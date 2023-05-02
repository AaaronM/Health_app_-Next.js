"use client";
import React from "react";

import body from "../../public/IMG/body.png";
import Iphone from "../../public/IMG/Iphone.png";
import Bubble from "../../public/IMG/bubble.png";
import Image from "next/image";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

export default function AppBody() {
  return (
    <div>
      <h2 className="text-[45px] align-middle items-center text-center mt-[100px] mb-[100px]">
        How it works
      </h2>
      <div className="flex justify-center gap-[70px]">
        <div className="w-[450px] h-[600px] bg-[#F6F6F2] rounded-3xl shadow ">
          <div className="flex flex-col p-5 ">
            <h3 className="text-[35px] font-bold mb-3 ">
              Select your symptoms
            </h3>
            <p className="text-[22px] text-gray-700">
              Choose symptoms that accurately describe what your anxiety is and
              your condition.
            </p>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="relative"
            >
              <Image
                src={Iphone}
                className=" rounded-2xl rotate-[30deg] w-[550px]  "
              />
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <button className=" absolute top-[70px] left-[211.7px]   border-white border-[2.5px] rounded-full w-7 h-7 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* ____NECK____ */}
          <button className=" absolute top-[105px] left-[261.7px]  border-[2.5px] rounded-full w-7 h-7 hover:bg-red-400 hover:scale-110 hover:border-none transition-all animate-ping hover:animate-none bg-red-400" />
          {/* _____RIGHT ARM _______ */}
          <button className=" absolute top-[105px] left-[161.7px]   border-white border-[2.5px] rounded-full w-7 h-7 hover:bg-red-400 hover:scale-110 hover:border-none transition-all " />
          {/* _____LEFT ARM _______ */}
          <button className=" absolute top-[147px] left-[197.7px]   border-white border-[2.5px] rounded-2xl w-[55px] h-10 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* _____CHEST ARM _______ */}
          <button className=" absolute top-[200px] left-[197.7px]   border-white border-[2.5px] rounded-2xl w-[55px] h-10 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* _____WAIST ARM _______ */}
          <button className=" absolute top-[245px] left-[241.7px]   border-white border-[2.5px] rounded-full w-7 h-7 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* _____HIPS RIGHT _______ */}
          <button className=" absolute bottom-[261px] left-[236.7px]   border-white border-[2.5px] rounded-2xl w-8 h-14 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* ______HIPS LEFT________ */}
          <button className=" absolute top-[245px] left-[182.7px]   border-white border-[2.5px] rounded-full w-7 h-7 hover:bg-red-400 hover:scale-110 hover:border-none transition-all" />
          {/* _____RIGHT THIGH _______ */}
          <button className=" absolute bottom-[261px] left-[184.7px]   border-white border-[2.5px] rounded-2xl w-8 h-14 hover:bg-red-400 hover:scale-110 hover:border-none transition-all  " />
          {/* _____LEFT THIGH _______ */}
          <button className=" absolute bottom-[121px] left-[188.7px]   border-white border-[2.5px] rounded-2xl w-6 h-[5rem] hover:bg-red-400 hover:scale-110 hover:border-none transition-all " />
          {/* _____LEFT CALF _______ */}
          <button className=" absolute bottom-[121px] left-[239.7px]   border-white border-[2.5px] rounded-2xl w-6 h-[5rem] hover:bg-red-400 hover:scale-110 hover:border-none transition-all " />
          {/* _____RIGHT CALF _______ */}
          <button className=" absolute bottom-[75px] left-[193.7px]   border-white border-[2.5px] rounded-full w-5 h-5 hover:bg-red-400 hover:scale-110 hover:border-none transition-all " />
          {/* _____LEFT ANKLE _______ */}
          <button className=" absolute bottom-[75px] left-[239.7px]   border-white border-[2.5px] rounded-full w-5 h-5 hover:bg-red-400 hover:scale-110 hover:border-none transition-all " />
          {/* _____RIGHT ANKLE _______ */}
          <Image src={body} className="w-[450px] " />
        </div>
      </div>
    </div>
  );
}

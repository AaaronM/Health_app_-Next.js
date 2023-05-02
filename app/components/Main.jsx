import React from "react";

import { AiFillApple, AiFillStar } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

import femaldoc from "../../public/IMG/femaldoc.png";
import Pil from "../../public/IMG/Pil.png";
import Heart from "../../public/IMG/Hearth.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="p-5 align-middle flex flex-col justify-center">
        <div className="flex justify-center">
          {/* TOP */}
          <div>
            <h1 className="text-[70px] font-bold  uppercase">
              Health Info in <br />
              one app
            </h1>
            <div className="flex align-middle items-center ">
              {/* ICON BRN */}
              <div className="flex text-white ">
                <button className="border rounded-xl p-2 mr-5 flex align-middle items-center  bg-slate-950 gap-2 w-auto ">
                  <AiFillApple className=" w-7 h-7" />
                  <p className="">App Store</p>
                </button>

                {/* ICON BRN */}

                <button className="border rounded-xl p-2 flex align-middle items-center gap-3 text-black">
                  <FaGooglePlay className=" w-6 h-6" />
                  <p>Google Play </p>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-[100px] mt-4">
            <h3 className="text-gray-600">
              Doctors, medicine, lab tests - all in one <br /> service 24/7
              availability...
            </h3>
            <button className="mt-2 ">See details &rarr; </button>
          </div>
        </div>
        {/* TOP */}
        <div className="flex justify-center">
          <div className="flex gap-10 mt-[150px] align-bottom items-end ">
            <div className="bg-[#e7e7e6] h-[250px] w-[270px] rounded-3xl z-10">
              <div className="p-6">
                <p className=" text-center text-lg font-semibold mt-7">
                  There is a little fatigue but in general I fell good
                </p>
                <div className="flex  gap-6 text-[30px] p-0 items-center m-5 justify-center">
                  <p className="bg-white rounded-full flex justify-center  items-center p-2 w-[45px] h-[45px] align-middle text-center  ">
                    😕
                  </p>
                  <p className="bg-white rounded-full flex justify-center  items-center p-2 w-[45px] h-[45px] align-middle text-center ">
                    🙂
                  </p>
                  <p className="bg-white rounded-full flex justify-center  items-center p-2 w-[45px] h-[45px] align-middle text-center  ">
                    😄
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3D1FD] h-[400px] w-[350px] rounded-3xl relative">
              <Image
                src={Pil}
                className="mt-[37px] absolute h-20 w-20 top-[100px] left-[-90px] z-20"
              ></Image>
              <Image
                src={Heart}
                className="mt-[37px] absolute h-20 w-20 top-[40px] right-[-27px]"
              ></Image>
              <Image src={femaldoc} className="mt-[32px]  scale-110"></Image>
            </div>
            <div className="bg-slate-950 h-[200px] w-[230px] rounded-3xl relative text-white p-5 flex items-center">
              <div className="flex flex-col">
                <h3 className="mb-2">App store rating</h3>
                <p className=" font-bold text-[35px]">4.9</p>
                <div className="flex flex-row  text-yellow-400 text-[25px] mb-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className=" text-gray-500">456 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

import girlpic1 from "../../public/IMG/girlpic1.png";
import girlpic2 from "../../public/IMG/girlpic2.png";
import girlpic3 from "../../public/IMG/girlpic3.png";
import { useState, useRef, useEffect } from "react";
import { useInView, animated } from "@react-spring/web";

function CarouselStories() {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const reffrance = useRef(null);

  const changeStyle = () => {
    setIsActive((current) => !current);
  };
  const handleSelect = (selectedIndex, e) => {
    changeStyle();
    setIndex(selectedIndex);
  };
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div>
      <div className="flex justify-center gap-[50px] ">
        <animated.div style={springs} ref={ref}>
          <div className="flex  relative">
            <Image
              src={girlpic2}
              className={
                isActive
                  ? `w-[150px] h-[150px] translate-y-[358px] translate-x-[150px] transition-all delay-500 `
                  : "w-[190px] h-[190px] translate-y-[138px] translate-x-[30px] transition-all delay-500"
              }
              ref={ref}
              id="1"
            />

            <Image
              src={girlpic3}
              className={
                isActive
                  ? "w-[220px] h-[220px] translate-y-[90px] translate-x-[110px] transition-all delay-500"
                  : "w-[150px] h-[150px] translate-y-[358px] translate-x-[50px] transition-all delay-500"
              }
            />

            <Image
              src={girlpic1}
              className={
                isActive
                  ? "w-[190px] h-[190px] translate-y-[138px] translate-x-[-330px] transition-all delay-500"
                  : " w-[220px] h-[220px] translate-x-[-100px] translate-y-[88px]  transition-all delay-500"
              }
            />
            <div className="w-[200px] h-[200px] rounded-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  absolute top-[200px] left-[150px]">
              <p className=" translate-x-[55px] translate-y-[72px]">
                <span className=" font-bold text-[25px]">+100k</span>
                <br />
                Happy clients
              </p>
            </div>
          </div>
        </animated.div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="w-[500px] h-[500px] text-black p-10"
        >
          <Carousel.Item className="p-10">
            <h3 className=" font-bold text-[30px] mb-3">Quick & easy</h3>
            <p className="  font-light text-[18px] mb-3">
              Spoke to Dr. Mike, he was wonderfull and truly caring about our
              situation. Thank you for being so kind!
            </p>
            <h4 className=" font-bold text-[22px] mb-3">Leslie Alexandr</h4>
            <p className=" font-light text-[15px] mb-3">HR Manager</p>
            <p className="font-bold text-[22px] mb-3">1/3</p>
          </Carousel.Item>
          <Carousel.Item className="p-10 ">
            <h3 className=" font-bold text-[30px] mb-3">Great experience</h3>
            <p className="  font-light text-[18px] mb-3">
              That was easy to do even with a fever and felling very lousy. I'm
              so happy to find youe app. Thank you so much!
            </p>
            <h4 className=" font-bold text-[22px] mb-3">Brooklyn Simmons</h4>
            <p className=" font-light text-[15px] mb-3">Product designer</p>
            <p className="font-bold text-[22px] mb-3">2/3</p>
          </Carousel.Item>
          <Carousel.Item className="p-10">
            <h3 className=" font-bold text-[30px] mb-3">
              Friendly and professional
            </h3>
            <p className="  font-light text-[18px] mb-3">
              Friendly and professional , no long wait, doctor was friendly.
              Overall excellent experience, as far as doctors go.
            </p>
            <h4 className=" font-bold text-[22px] mb-3">Erika Miller</h4>
            <p className=" font-light text-[15px] mb-3">Student</p>
            <p className="font-bold text-[22px] mb-3">3/3</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselStories;

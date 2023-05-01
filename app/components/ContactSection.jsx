"use client";

import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../components/variants";

const Contact = () => {
  return (
    <section id="contact" className="lg:section py-16 mt-[100px] ">
      <div className="container mx-auto bg-[#F6F6F2] rounded-2xl p-5">
        <div className="flex flex-col lg:flex-row">
          {/* TEXT */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let us <br /> Help you !
              </h2>
              <h4 className="text-xl uppercase text-accent font-medium tracking-wide">
                Phone number
              </h4>
              <p>(818) 888-88-88</p>
              <h4 className="text-xl uppercase text-accent font-medium tracking-wide">
                Email
              </h4>
              <p>sunrise555@gmail.com</p>
            </div>
          </motion.div>
          {/* FORM */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-7 pb-24 p-4 items-start"
          >
            <input
              className="bg-transparent border-b py-3  outline-none w-full placeholder:text-gray-800 focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3  outline-none w-full placeholder: text-gray-800 focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12  outline-none w-full placeholder: text-gray-800 focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button className="border rounded-xl p-2 mr-5 flex align-middle items-center gap-3 bg-slate-950 text-white">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

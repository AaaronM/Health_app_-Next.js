import React from "react";
import Image from "next/image";

import logo from "../../public/IMG/logomediacl.png";

function Navbar() {
  return (
    <div className="flex justify-between p-4  ">
      <ul className="flex flex-row gap-10 align-middle items-center ">
        <Image src={logo} alt="Picture of the author" width={50} height={20} />
        <li>How it works</li>
        <li>Testimonials</li>
      </ul>
      <button className="border rounded-full p-2 text-white bg-black">
        Contact us
      </button>
    </div>
  );
}

export default Navbar;

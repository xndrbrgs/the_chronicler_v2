import Image from "next/image";
import React from "react";
import { BeakerIcon } from '@heroicons/react/24/outline'
import { HomeIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src={"https://i.ibb.co/0Ys2qYG/Barnes-Noble-Logo.png"}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="logo"
        />
      </div>

      <div>
        <HomeIcon />
        <p>Home</p>
        <ChevronDoubleDownIcon/>
      </div>
    </div>
  );
}

export default Header;

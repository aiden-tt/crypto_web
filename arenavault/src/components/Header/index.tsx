"use client";

import log from "@/assets/image.png";
import Image from "next/image";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="absolute text-white px-10 top-0 flex items-center justify-center w-full sidePadding py-4 overflow-hidden z-50">
      <div className="w-1/3 inline-block">
        <Link href="/">
          <Image
            alt="arenavault"
            loading="lazy"
            width="200"
            height="52"
            decoding="async"
            data-nimg="1"
            className="z-10 cursor-pointer"
            src={log}
            style={{
              color: "transparent",
            }}
          />
        </Link>
      </div>
      <div className="w-1/3 flex items-center justify-center"></div>
      <div className="w-1/3 flex justify-end">
        {/* <div>
          <button
            id="wallet-connect"
            className="p-0 text-black pointer-events-auto bg-augmintYellow hover:bg-augmintYellowHover select-none font-bold py-1 px-3 rounded text-[13px]"
          >
            <ConnectButton />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;

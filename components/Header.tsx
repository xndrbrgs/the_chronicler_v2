import Image from "next/image";
import React from "react";
import {
  BeakerIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm sticky-top-0 z-50">
      <div className="flex bg-white px-4 py-2 shadow-sm">
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
        <div className="flex items-center mx-7 space-x-2 xl:min-w-[300px]">
          <HomeIcon className="h-5 w-5 text-gray-500" />
          <p className="flex-1 ml-2 hidden lg:inline">Home</p>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </div>
        {/* Search Box */}
        <form className="flex items-center flex-1 space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Search by Titles, Authors, Etc."
          />
          <button type="submit" className="hidden" />
        </form>
        {/* Login Button */}
        {session ? (
          <div
            onClick={() => signOut()}
            className="flex items-center mx-3 px-4 cursor-pointer space-x-2 relative border border-gray-100 hover:bg-slate-100 
 transition"
          >
            <div className="relative rounded-full w-6 h-6 border-gray-200 bg-white">
              <Image src={session.user?.image} fill alt="user image" />
            </div>
            <p className="hidden truncate lg:inline">{session.user?.name}</p>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="flex items-center mx-3 px-4 cursor-pointer space-x-2 relative border border-gray-100 hover:bg-slate-100 
      transition"
          >
            <UserCircleIcon className="h-6 w-6 text-gray-500" />
            <p className="hidden lg:inline">Sign In</p>
          </div>
        )}
      </div>
    </div>
  );
}

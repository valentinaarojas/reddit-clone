import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
function Header() {
  // Destructuring - takes the 'data' property from the object returned by useSession()
  // (which is current user's auth info) and assigns/stores it to the 'session' variable.
  // 'data' is a boolean indicating whether the user is authenticated or not.
  const { data: session } = useSession();
  return (
    // Navbar Header
    <div className="sticky-top-0 z-50 flex bg-white px-4 py-2 shadow-sm border border-gray-200">
      {/* Reddit Logo */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain" // helps image not to be stretched out weird
          src="https://logos-world.net/wp-content/uploads/2023/12/Reddit-Logo.png"
          layout="fill" // fills up whole space
          alt="Reddit Logo"
        />
      </div>
      {/* Home & Chevron Icons */}
      <div className="mx-7 flex items-center xl:min-w-[300px] space-x-2 cursor-pointer">
        <HomeIcon className="h-5 w-5 text-black" />
        <p className="flex-1 ml-2 hidden lg:inline text-black">Home</p>
        <ChevronDownIcon className="h-4 w-5 text-black-500" />
      </div>
      {/* Search Bar */}
      <form className="flex flex-1 items-center space-x-2 border rounded-sm-border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent text-gray-600 outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        {/* when you click on search bar, no actual button needed, just hit 'enter' */}
        <button type="submit" hidden />
      </form>
      {/* Menu Icon for Small Screens */}
      <div className="flex lg:hidden items-center pl-3">
        <Bars3Icon className="icon" />
      </div>
      {/* Icons for Large Screens */}
      <div className="flex items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      {/* Sign In / Sign Out Button */}
      {/* Conditional (ternary) operator is used to either display 
      the Sign In or Sign Out button based on whether the user is authenticated or not */}
      {session ? (
        // If user is authenticated, display the Sign Out button
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 cursor-pointer border border-gray-100 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
              layout="fill"
              alt="Reddit Logo Outline"
            />
          </div>
          {/* Display user's username for Sign Out button */}
          {/* ? - provides optional chaining if session/user undefined, 
          handles error without throwing */}
          <div className="flex-1 text-xs">
            <p className="truncate">
              {" "}
              {/* Displays ... if username is too long */}
              {session?.user?.name}
            </p>
            <p className="text-sm text-gray-600">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-4 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        // If user is not authenticated, display the Sign In button
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 cursor-pointer border border-gray-100 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
              layout="fill"
              alt="Reddit Logo Outline"
            />
          </div>
          <p className="text-sm text-gray-600">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;

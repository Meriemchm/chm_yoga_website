"use client";

import { NavbarItems } from "@/components/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";
import { Container } from "../ui/container";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 mt-2">
      <Container className="rounded-full bg-white ">
        {/*Desktop*/}
        <div className="hidden md:flex w-full h-20 text-black justify-between  items-center  ">
          {/*Image*/}

          <Link className="flex items-center gap-2" href={"/"}>
            <Image
              src="/Icons/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className=" capitalize font-extralight text-lg ">flexflow</p>
          </Link>

          {/*NavItems*/}
          <div className="flex items-center gap-8">
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 capitalize">
                <Link
                  href={item.link}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <Button>
            {" "}
            <Link href="/book-an-appointment">Book Now</Link>
          </Button>
        </div>

        {/*Mobile*/}
        <div className="md:hidden rounded-full  flex w-full h-20 bg-white text-black justify-between  items-center ">
          {/*Image*/}
          <Link href={"/"}>
            <Image
              src="/Icons/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
          {/*Hamburger Icon*/}
          <div
            className="text-3xl cursor-pointer z-10"
            onClick={() => isOpen(!open)}
          >
            <Image
              src={open ? "/Icons/times.svg" : "/Icons/bars.svg"}
              alt="logo"
              width={28}
              height={28}
              className="object-contain"
            />{" "}
          </div>
        </div>

        {/*Mobile Menu*/}

        {open && (
        <div className="flex flex-col justify-center items-center absolute gap-8 -top-2 left-0 w-full min-h-screen bg-white text-black">
           {/*NavItems*/}
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center capitalize text-xl">
                <Link
                  href={item.link}
                  className="hover:text-primary transition"
                  onClick={() => isOpen(!open)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Button>
              {" "}
              <Link href="/book-an-appointment" onClick={() => isOpen(!open)}>
                Book Now
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;

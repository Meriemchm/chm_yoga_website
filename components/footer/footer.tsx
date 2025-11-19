import Link from "next/link";
import Image from "next/image";
import { NavbarItems } from "../data/data";
import SocialMediaIcons from "../ui/socialMediaIcons";
import { Container } from "../ui/container";

export const Footer = () => {
  return (
    <div className="bg-secondary">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between w-full items-center">
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
          </div>

          <div className="border-t border-neutral-300 flex justify-between w-full items-center py-4 ">
            <SocialMediaIcons />
            <p className="md:text-base text-sm">
              © {new Date().getFullYear()} Flexflow. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

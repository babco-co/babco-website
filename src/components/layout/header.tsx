"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import arrowRightIcon from "../../../public/arrow-right-icon.svg";
import { CONTACT_EMAIL } from "@/lib/utils/constants";

const Header = () => {
  const color = useColorCycle();

  return (
    <header className="w-full  px-5 py-5">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle cx="19" cy="19" r="19" fill={color} />
            <path
              d="M20.6453 28.885C24.9846 28.885 27.1543 26.2033 27.1543 23.5216C27.1543 21.0939 25.3691 18.6663 21.8262 18.2428C24.0783 17.396 25.4515 15.4482 25.4515 13.5569C25.4515 11.2986 23.4466 9.125 18.6129 9.125H12.4884V28.4333H12.4609V28.885H20.6453ZM20.3432 18.6098C22.9523 18.6098 24.2431 21.0657 24.2431 23.5216C24.2431 25.9775 22.9523 28.4333 20.3432 28.4333H14.9876V9.57666H18.4481C21.4143 9.57666 22.8973 11.6656 22.8973 13.8109C22.8973 16.041 21.3044 18.2993 18.1186 18.2993C17.3496 18.2993 16.4982 18.1864 15.5369 17.8759C16.8827 18.4404 18.1186 18.6945 19.2446 18.6945C19.6291 18.6945 19.9861 18.6663 20.3432 18.6098Z"
              fill="black"
            />
          </svg>

          <p className="hidden sm:block text-xs font-normal text-primary-white uppercase">
            Design & Engineering Firm
          </p>
        </div>

        <div className="flex items-center justify-end gap-5">
          <Link
            className="hidden sm:block text-xs font-normal text-primary-white uppercase"
            href={
              "https://babco-shop.fourthwall.com/en-eur/collections/the-babs"
            }
          >
            Merch
          </Link>

          <div className="hidden sm:flex items-start justify-center text-center">
            <p className="mb-2">.</p>
          </div>

          <Link
            className="hidden sm:block text-xs font-normal text-primary-white uppercase"
            href={""}
          >
            Follow
          </Link>

          <Link href={`mailto:${CONTACT_EMAIL}?subject=Hi%20Babco!`}>
            <Button
              className="ml-4 gap-2"
              variant="primary"
              bgColor={color}
              onClick={(e) => e.stopPropagation()}
            >
              Talk to us
              <Image src={arrowRightIcon} alt="arrow" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

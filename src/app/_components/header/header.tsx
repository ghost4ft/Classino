import React from "react";
import Image from "next/image";
import { TopNavigation } from "./top-navigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b-[.5px] dark:border-base-content/60 dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <TopNavigation />
        <span className="mr-auto">User Authentication</span>
      </div>
    </header>
  );
};


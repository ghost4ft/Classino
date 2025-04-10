"use client";
import React from "react";
import Link from "next/link";
import { NavigationMenuItem } from "@/types/navigation-menu-item";
import { usePathname } from "next/navigation";
const MenuItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره ها", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];

export const TopNavigation: React.FC = () => {
  const pathName = usePathname();
  return (
    <>
      <ul className="flex gap-8 mr-12 ">
        {MenuItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <li key={item.href}>
              <Link
                className={`dark:hover:text-primary transition-colors duration-300 pb-2 
                  ${isActive ? "border-b-2 dark:text-primary dark:border-primary/30"  : ""}`}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";

export default function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/digiflash_cse/",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@DigiflashMCETofficial",
    },
  ];

  return (
    <div className="dark flex flex-col gap-8 items-center justify-center py-8 h-auto w-full">
        <h1 className="text-center">Connect with us</h1>
      <FloatingDock items={links} />
      <h1 className="text-center">© 2024 DigiFlash CSE</h1>
      <p className="text-center py-8">
        Done by{" "}
        <a href="https://github.com/pragadeeshnehru">Pragadeesh Nehru</a> 😎
      </p>
    </div>
  );
}

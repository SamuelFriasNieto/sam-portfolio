"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import AppThemeToggler from "./AppThemeToggler";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const {t} = useTranslation();
  const navItems = [
    {
      name: t("navBar.projects"),
      link: "#projects",
    },
    {
      name: t("navBar.about"),
      link: "#about",
    },
    {
      name: t("navBar.experience"),
      link: "#experience",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-fit mx-auto">
      <Navbar className="">
        {/* Desktop Navigation */}
        <NavBody className="border w-full border-gray-600 py-4">
          <NavItems items={navItems} />
          <AppThemeToggler />
          <LanguageSwitch />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

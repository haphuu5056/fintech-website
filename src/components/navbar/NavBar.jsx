"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { bankingSolutionsItems, productItems } from "../../data/data";
import { NavLink, DropdownLink } from "./nav-components";

export default function NavBar() {
  return (
    <Navbar position="sticky" isBordered className="bg-white">
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} alt="FinTech Logo" width={200} height={40} />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6 p-3">
        <DropdownLink items={bankingSolutionsItems} title="Banking Solutions" />
        <DropdownLink items={productItems} title="Products" />
        <NavbarItem >
          <NavLink href="/servicess">Services</NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            aria-label="contact button"
            as={Link}
            color="primary"
            href="/contact"
            variant="flat"
            className="font-medium"
            size="md"
          >
            Talk to Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

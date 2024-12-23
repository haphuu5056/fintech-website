import React from "react";
import {
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg relative group ${
        isActive ? "text-primary font-medium" : "text-gray-700"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
};

export const DropdownLink = ({ items, title }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(" ", "-"));

  const gridClass = title === "Products" ? "grid-cols-2" : "grid-cols-3";

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <div className="cursor-pointer">
            <div
              className={`flex items-center gap-1 p-2 text-lg font-normal relative group ${
                isActive ? "text-primary font-medium" : "text-gray-700"
              }`}
            >
              {title}
              <ChevronDown
                className={`h-4 w-4 ${isActive ? "text-primary" : ""}`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </div>
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={title}
        className="w-[90%] p-0"
        itemClasses={{ base: "gap-4" }}
        variant="light"
      >
        <DropdownItem className="rounded-md p-0 hover:text-transparent">
          <div
            className={`grid ${gridClass} gap-2 p-4`}
          >
            {items.map((item) => (
              <Link
                href={`/${item.key}`}
                key={item.key}
                className={`flex gap-3 items-start hover:bg-blue-50 p-2 rounded-lg transition-colors ${
                  pathname ===
                  `/${item.key}`
                    ? "bg-blue-50"
                    : ""
                }`}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <div
                    className={`text-xl font-medium mb-1 ${
                      pathname ===
                      `/${item.key}`
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="text-gray-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

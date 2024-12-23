// Footer.js
import { aboutCompanyLinks, usefulInfoLinks } from "@/data/data";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
            Fin<span className="text-white ">Tech</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            We provide innovative banking solutions that empower individuals and
            businesses through cutting-edge technology and accessibility.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer text-gray-400 hover:text-blue-500" />
            <FaTwitter className="cursor-pointer text-gray-400 hover:text-blue-500" />
            <FaLinkedinIn className="cursor-pointer text-gray-400 hover:text-blue-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h2 className="text-xl font-medium mb-4 text-gray-100">
            About Company
          </h2>
          <ul className="text-gray-400 space-y-3 ">
            {aboutCompanyLinks.map((about, index) => (
              <li key={index}>
                <Link href={about.href}>
                  <span className="hover:text-blue-500">{about.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-medium mb-4 text-gray-100">
            Useful Information
          </h2>
          <ul className="text-gray-400 space-y-3">
            {usefulInfoLinks.map((about, index) => (
              <li key={index}>
                <Link href={about.href}>
                  <span className="hover:text-blue-500">{about.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-medium mb-4 text-gray-100">
            Contact Information
          </h2>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-blue-500" />
              123 FinTech Street, City, Country
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-blue-500" />
              +123 456 7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-500" />
              info@fintechsite.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} FinTech Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

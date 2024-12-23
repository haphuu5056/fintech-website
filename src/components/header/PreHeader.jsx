import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import {FaFacebookF, FaTwitter,FaLinkedinIn} from 'react-icons/fa'
const Header = () => {
  return (
    <header className="bg-gray-100 py-3 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-8 mb-2 sm:mb-0">
          <span className="flex items-center font-medium ">
            <Clock className="h-4 w-4 mr-2" />
            Sat - Sun 08.00 to 10.00
          </span>
          <a
            href="tel:+1234567890"
            className="flex items-center hover:text-primary"
          >
            <Phone className="h-4 w-4 mr-1" />
            +1 (234) 567-890
          </a>
        </div>
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <a
            href="mailto:support@fintechcompany.com"
            className="flex items-center hover:text-primary"
          >
            <Mail className="h-4 w-4 mr-1" />
            support@fintechcompany.com
          </a>
          <span className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Almukarama Road, Near Shaqaalaha
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebookF size={16} className="text-gray-500" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={16} className="text-gray-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaLinkedinIn size={16} className="text-gray-500" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

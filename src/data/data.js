import {
  CircleCheckBig,
  ShieldOff,
  Scale,
  CloudCog,
  HelpCircle,
  Phone,
  Star,
  Code,
  FileQuestion,
  BadgeDollarSign,
  Bell,
  MemoryStick,
  Shield,
  Network,
  Lock,
  GitBranch,
  Smartphone,
  Webhook,
  Wallet,
  MessageCircle,
  Receipt,
  Users,
  RefreshCcw,
  FileCheck,
  Clock,
  Upload,
  ScanLine,
  Settings,
} from "lucide-react";

import img1 from "../../public/images/secure.png";
import img2 from "../../public/images/Online world-bro.png";
import img3 from "../../public/images/Time machine-bro.png";

export const bankingSolutionsItems = [
  {
    key: "ussd_integration",
    name: "USSD Integration",
    description: "Seamless mobile banking integration for your customers",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    key: "airtime-purchase",
    name: "Airtime Purchase",
    description: "Quick and easy airtime top-up solutions",
    icon: <Phone className="w-6 h-6 text-primary" />,
  },
  {
    key: "mobile_banking",
    name: "Mobile Banking",
    description: "Complete mobile banking platform solutions",
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
  },
  {
    key: "whatsapp_banking",
    name: "WhatsApp Banking",
    description: "Banking services through WhatsApp",
    icon: <FileQuestion className="w-6 h-6 text-primary" />,
  },
  {
    key: "api_integration",
    name: "API Integration",
    description: "Robust API solutions for your banking needs",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    key: "bill_payment",
    name: "Bill Payment",
    description: "Comprehensive bill payment solutions",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
];
export const productItems = [
  {
    key: "erp_management_system",
    name: "ERP Management System",
    description: "Seamless mobile banking integration for your customers",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    key: "queue_management",
    name: "QUEUE Mangement",
    description: "Quick and easy airtime top-up solutions",
    icon: <Phone className="w-6 h-6 text-primary" />,
  },
  {
    key: "beneficiary_management",
    name: "Beneficiary Management",
    description: "Complete mobile banking platform solutions",
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
  },
];
export const mainServices = [
  // {
  //   icon: <Smartphone />,
  //   title: "USSD Integration",
  //   description:
  //     "With the help of USSD services, you can offer seamless access for your customers to the interactive features of your application.",
  // },
  // {
  //   icon: <Phone />,
  //   title: "Airtime Purchase",
  //   description:
  //     "We provide mobile subscribers with instant airtime distribution services along with delivery and failure notifications.",
  // },
  {
    icon: <Wallet />,
    title: "Mobile Banking",
    description:
      "We offer you a secure and robust mobile banking application for your customers to manage their financial needs with ease.",
  },
  // {
  //   icon: <MessageCircle />,
  //   title: "WhatsApp Banking",
  //   description:
  //     "You will enable your customers to receive direct messages from your bank on various typical banking inquiries like fixed deposits, pre-approved loans, and credit cards.",
  // },
  {
    icon: <Code />,
    title: "API Integration",
    description:
      "We offer API development and integration for existing platforms like core banking and to new channels like revenue authority platforms and national payment systems.",
  },
  {
    icon: <Receipt />,
    title: "Bill Payment",
    description:
      "Let your customers pay bills like rent or a mortgage, cable and electricity bills, credit card payments, and more directly from their bank accounts.",
  },
];
export const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security Assessment & enforcement",
    description:
      "We examine a company's security controls and how they stack up against known vulnerabilities. It's part of the risk management process, in that it incorporates threat-based approaches to evaluate cyber resilience.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Network design and implementation",
    description:
      "We design and redesign a company's entire computer network infrastructure by evaluating, scoping, and testing a network prior to utilization. The network design includes cabling structure, logistics mapping and security measurements.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "VPN Set Up",
    description:
      "We perform configuration of the following types of VPNs: IPSEC, P2P, OpenVPN, L2TP, IKE. We also provide a special VPN configurations package for remote working with has extra security.",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "Branch to Branch connection setup",
    description:
      "We perform configuration of a secure branch to branch connection through VPN or MPLS (Leased Lines) ensuring seamless communication between locations.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "USSD Setup and Implementation",
    description:
      "We setup and implement USSD codes for banks at an affordable cost, enabling quick and easy access to banking services via mobile devices.",

  },
  {
    icon: <Webhook className="w-8 h-8" />,
    title: "Third-Party API Development and Integration",
    description:
      "We perform API development and Integration for Mobile money, National Payment system, USSD, SMS and Card Processing among others.",
  },
];
export const keyBenefitsData = [
  {
    id: 1,
    title: "Easy To Use",
    description:
      "By inputting a few digits, your customers can access a wide range of banking services, options, and menus.",
    icon: <CircleCheckBig size={30} />,
  },
  {
    id: 2,
    title: "No Internet Connection Or Data Required",
    description:
      "Customer can access banking services without the need for internet data on their phone. Customer simply dials the USSD and enjoys the service.",
    icon: <ShieldOff size={30} />,
  },
  {
    id: 3,
    title: "Scalable Flexibility",
    description:
      "USSD technology enables you to customize menu options, metrics, and services to perfectly align with your specific requirements.",
    icon: <Scale size={30} />,
  },

  {
    id: 4,
    title: "International Access",
    description:
      "USSD is a widely accessible and globally available payment method that can reach all types of consumers. It is particularly popular in areas with low bank penetration rates, making it an extremely effective payment method in Africa.",
    icon: <CloudCog size={30} />,
  },
];

export const aboutCompanyLinks = [
  { label: "Payment Processing", href: "/bill_payment" },
  { label: "Banking APIs", href: "/mobile_banking" },
  { label: "Digital Wallets", href: "/ussd_integration" },
  { label: "Fraud Protection", href: "#" },
];

export const usefulInfoLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "/" },
];
export const whyChoosepoints = [
  {
    number: "01",
    title: "Tailored Solutions",
    description: `Our approach is not one-size-fits-all. We specialize in crafting bespoke banking solutions that align with your unique requirements and business goals.`,
  },
  // {
  //   number: "02",
  //   title: "Innovation at the Core",
  //   description: `Embrace the future of banking with our innovative technologies. We stay ahead of industry trends to deliver cutting-edge solutions that keep your institution at the forefront of financial innovation.`,
  // },
  {
    number: "03",
    title: "Expertise You Can Trust",
    description: `Benefit from the collective wisdom of our seasoned professionals. Our team brings a wealth of experience in developing and implementing banking solutions, ensuring a reliable and robust foundation for your financial operations.`,
  },
  {
    number: "04",
    title: "Seamless Integration",
    description: `We understand the importance of a smooth transition. Our solutions are designed for seamless integration, minimizing disruptions and optimizing efficiency across your banking ecosystem.`,
  },
  {
    number: "05",
    title: "Security First",
    description: `Safeguarding your data and ensuring compliance is our top priority. Our banking solutions are built with robust security measures to protect sensitive information and maintain regulatory compliance.`,
  },
  // {
  //   number: "06",
  //   title: "Scalability for Growth",
  //   description: `As your institution evolves, so do our solutions. Enjoy the scalability to adapt and grow, ensuring that our banking solutions remain aligned with your expanding needs and ambitions.`,
  // },
];
export const mobileKeybenifts = [
  {
    title: "Easy Payment",
    description:
      "Provides a simple, seamless payment interface to carry out all transactions with ease and convenience.",
    icon: "💸",
    isPrimary: true,
  },
  {
    title: "Safe Transaction",
    description:
      "Our advanced security features ensure the safety of all transactions, keeping your data protected.",
    icon: "🔒",
  },
  {
    title: "Fast Customer Service",
    description:
      "Instant access to customer service with quick responses available 24/7.",
    icon: "⚡",
  },
  {
    title: "Quick Transaction",
    description: "Perform transactions quickly and efficiently with no delays.",
    icon: "⏱️",
  },
];
export const apiIntegrationData = [
  {
    title: "Secure",
    description:
      "Our API development process follows ISO-27001 standards, which ensures secure sharing of transactional data.",
    image: img1,
  },
  {
    title: "Robust",
    description: "Our API's can handle millions of transactions per second.",
    image: img3,
  },
  {
    title: "Highly Reliable",
    description:
      "Our APIs are developed with microservices architecture in mind to ensure 99.9% uptime.",
    image: img2,
  },
];

export const airtimeItems = [
  {
    icon: <Bell size={30} />,
    title: "Delivery Notifications",
    description:
      "For every Airtime request that is processed for your application, we receive and share success or failure notifications.",
  },
  {
    icon: <BadgeDollarSign size={30} />,
    title: "Earn Discounts",
    description:
      "You can use the discounts that come with each Airtime transaction to pay for your API calls.",
  },
  {
    icon: <MemoryStick size={30} />,
    title: "High Capacity",
    description:
      "Our Airtime gateway is designed to handle millions of simultaneous requests at once.",
  },
];
export const beneficiaryStats = [
  {
    icon: Users,
    title: "Active Users",
    value: "50K+",
    subtitle: "Happy customers using our platform",
    bgClass: "bg-primary-50",
    iconClass: "text-primary",
  },
  {
    icon: RefreshCcw,
    title: "Service Reliability",
    value: "99.9%",
    subtitle: "Always available when you need us",
    bgClass: "bg-success-50",
    iconClass: "text-success",
  },
  {
    icon: FileCheck,
    title: "Success Rate",
    value: "99.99%",
    subtitle: "Transactions completed successfully",
    bgClass: "bg-warning-50",
    iconClass: "text-warning",
  },
  {
    icon: Clock,
    title: "Fast Transfers",
    value: "30s",
    subtitle: "Average transaction time",
    bgClass: "bg-secondary-50",
    iconClass: "text-secondary",
  },
];

export const beneficiaryWorkflowSteps = [
  {
    icon: Upload,
    title: "1. Batch Processing",
    description:
      "Secure bulk upload of beneficiary data with automated validation. Supports multiple file formats (CSV, Excel, API integration) with built-in data sanitization and deduplication.",
    bgClass: "bg-primary",
  },
  {
    icon: ScanLine,
    title: "2. Verification & Authorization",
    description:
      "Multi-level approval workflow with role-based access control. Supports biometric verification, document validation, and automated KYC/AML checks through integrated APIs.",
    bgClass: "bg-success",
  },
  {
    icon: Settings,
    title: "3. Disbursement & Reconciliation",
    description:
      "Automated payment processing through multiple channels (Bank transfer, Mobile money, Card). Real-time transaction monitoring with automated reconciliation and detailed audit trails.",
    bgClass: "bg-warning",
  },
];

export const beneficiaryFeatures = [
  {
    bgClass: "bg-success-50",
    title: "Real-time Synchronization",
    description:
      "Automatic sync with central database ensuring up-to-date information. Updates reflect within milliseconds across all connected systems.",
  },
  {
    bgClass: "bg-primary-50",
    title: "Secure Data Transfer",
    description:
      "Military-grade end-to-end encryption for all data transfers and storage. Compliant with GDPR, HIPAA, and other data protection standards.",
  },
  {
    bgClass: "bg-warning-50",
    title: "Comprehensive Audit Trail",
    description:
      "Detailed tracking of all changes with user attribution, timestamps, and version history. Export audit logs for compliance reporting.",
  },
  {
    bgClass: "bg-secondary-50",
    title: "Intelligent Notifications",
    description:
      "Customizable alerts via email, SMS, or in-app notifications. Priority-based notification system for critical updates and sync issues.",
  },
];

export const beneficiarySpecs = [
  "ISO 27001 Certified",
  "256-bit Encryption",
  "Multi-Region Deployment",
  "API-First Architecture",
  "Real-time Analytics",
  "24/7 Technical Support",
];
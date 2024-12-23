
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  BarChart3,
  Box,
  ClipboardList,
  FileBarChart,
  LineChart,
  Settings,
} from "lucide-react"

export default function ErpManagementPage() {
  const solutions = [
    {
      title: "Sales Orders",
      description: "Fast, accurate and efficiently supporting your sales team.",
      icon: <ClipboardList className="w-6 h-6 " />,
      color: "bg-blue-500",
    },
    {
      title: "Business Intelligent",
      description:
        "Our ERP is business intelligent, helping analyze, assess and adapt your business processes in order to achieve targets.",
      icon: <BarChart3 className="w-6 h-6 " />,
      color: "bg-purple-500",
    },
    {
      title: "Stock control",
      description:
        "Stock control allows you to keep tight control over your stock, sales and purchases.",
      icon: <Box className="w-6 h-6 " />,
      color: "bg-yellow-400",
    },
    {
      title: "Warehouse & Production",
      description:
        "Access real-time data across your warehouses to optimize stock management to maximize production outputs. Turn your goods in bay digital to eliminate human errors and stock.",
      icon: <LineChart className="w-6 h-6 " />,
      color: "bg-red-500",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Get a 360° view of real-time data and insight across your SME. Use innovative Business Intelligence tools, analytics, and reporting features to make more informed decisions.",
      icon: <FileBarChart className="w-6 h-6 " />,
      color: "bg-blue-400",
    },
    {
      title: "Purchasing & Procurement",
      description:
        "Optimise order creations and streamline purchasing processes. Select the most cost-effective vendor and improve your invoicing and payments processes.",
      icon: <Settings className="w-6 h-6 " />,
      color: "bg-purple-500",
    },
  ];

   return (
     <>
       <HeroBanner
         title="ERP Management System"
         subtitle="Our ERP Management System is designed to help you manage your business operations efficiently and effectively. With our ERP, you can streamline your processes, improve your productivity, and make data-driven decisions."
       />
       <div className="w-full py-12 bg-gray-50">
         <div className="container px-4 md:px-6 mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
               One Integrated Solution For Your Business
             </h2>
             <p className="mx-auto max-w-3xl text-lg text-gray-600">
               Our diverse clientele includes wholesalers, distributors,
               merchants, and retailers ranging in size from small businesses to
               multinational corporations, and we have an uncommon depth of
               knowledge and experience in the distributive trades.
             </p>
           </div>

           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {solutions.map((solution, index) => (
               <Card
                 key={index}
                 className="border shadow-lg  shadow-blue-100  p-6   "
               >
                 <CardHeader>
                      <h3 className={`flex-shrink-0 mb-5 text-white p-4 rounded-full  drop-shadow-xl ${solution.color}`}>{solution.icon}</h3>
                 </CardHeader>
                 <CardBody className="flex flex-col items-start ">
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     {solution.title}
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     {solution.description}
                   </p>
                 </CardBody>
               </Card>
             ))}
           </div>
         </div>
       </div>
     </>
   );
}
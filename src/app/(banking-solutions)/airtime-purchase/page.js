import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardHeader, CardBody } from "@nextui-org/react"; 
import Image from "next/image";
import img from '../../../../public/images/airtime1.png'
import { airtimeItems } from "@/data/data";
export default function AirTimePurchasePage() {
   return (
     <div className="bg-gray-50">
       <HeroBanner
         title="Airtime Purchase"
         subtitle=" We provide mobile subscribers with instant airtime distribution services along with delivery and failure notifications. Utilizing our Airtime APIs earns you discounts on each transaction, allowing you to save money."
         bgColor="#111827"
         textColor="#FFFFFF"
       />

       <section className="container mx-auto py-12 px-4">
         {/* Image and Cards Layout */}
         <div className="flex flex-col items-center lg:flex-row gap-8 overflow-hidden">
           {/* Image Layout */}
           <div className="lg:w-3/10 ">
             <Image
               src={img}
               alt="Mobile airtime recharge illustration with carrier logos"
               width={1200}
               height={500}
               className=" w-full h-auto"
               priority
             />
           </div>

           {/* Cards Layout */}
           <div className="lg:w-7/10 grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
             {/* Feature Cards */}
             {airtimeItems.map((feature, index) => (
               <Card
                 key={index}
                 className="bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
               >
                 <CardHeader className="pb-0 pt4 px-4 flex-col items-start">
                   <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
                     {feature.icon}
                   </div>
                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
                     {feature.title}
                   </h3>
                 </CardHeader>
                 <CardBody className="">
                   <p className="text-gray-600">{feature.description}</p>
                 </CardBody>
               </Card>
             ))}
           </div>
         </div>
       </section>
     </div>
   );
}

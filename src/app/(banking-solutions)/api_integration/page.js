import HeroBanner from "@/components/common/HeroBanner";
import { apiIntegrationData } from "@/data/data";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
export default function ApiIntegrationPage() {
  return (
    <>
      <HeroBanner
        title="API Integration"
        subtitle=" We offer API development and integration for existing platforms like core banking and to new channels like revenue authority platform And national payment systems among others."
        bgColor="#111827"
        textColor="#FFFFFF"
      />
      <section className="container mx-auto py-16 px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Seamless API Integration
          </h2>
          <p className="text-gray-600">
            Connect to our powerful API to streamline<br/> your processes and enhance
            functionality with ease.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* API Feature Card 1 */}
          {apiIntegrationData.map((feature, index) => (
            <Card
              key={index}
              className="p-4 shadow-none  text-center"
            >
              <CardHeader className="max-w-52 mx-auto">
                <Image src={feature.image} alt={`${feature.title} icon    `} className=" " />
              </CardHeader>
              <CardBody className="flex flex-col items-center text-center px-6">
                <h3 className="mb-2 text-2xl">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

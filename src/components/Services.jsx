import { mainServices } from "@/data/data";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { AiOutlineStar } from "react-icons/ai";
export default function Services() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Get All Banking Solutions You Need Now
        </h2>
        <p className="text-gray-600">
          We provide the best in class services for our customers
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
        {mainServices.map((service, index) => (
          <Card
            key={index}
            className={`p-4  hover:shadow-lg hover:shadow-blue-200 shadow-blue-100 hover:scale-105 `}
          >
            <CardHeader className="relative flex justify-center mb-4">
              <AiOutlineStar
                className="absolute top-0 left-2 text-blue-500 opacity-30"
                size={20}
              />
              {/* <AiOutlineStar
                className="absolute top-0 right-2 text-blue-500 opacity-30"
                size={20}
              /> */}
              <AiOutlineStar
                className="absolute top-8 left-8 text-blue-500 opacity-30"
                size={20}
              />
              <div className="text-primary">{service.icon}</div>
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500  text-base">{service.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
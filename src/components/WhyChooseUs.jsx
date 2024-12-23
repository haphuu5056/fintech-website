import { whyChoosepoints } from "@/data/data";
import { Card, CardBody } from "@nextui-org/react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
              Why choose us
            </h2>
            <p className="text-lg 2xl:text-xl text-gray-600 max-w-[600px]">
              At FinTech, we&apos;re committed to revolutionizing your banking experience. Our innovative solutions are designed to meet your unique needs and drive your financial success.
            </p>
          </div>
          <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 w-full">
            {whyChoosepoints.map((point, index) => (
              <Card
                key={point.number}
                className="group  rounded-lg bg-transparent backdrop-blur-xl hover:bg-blue-50/80 transition-all duration-300 shadow-none hover:shadow-md"
              >
                <CardBody className="p-4">
                  <div className="flex gap-6">
                    <span
                      className={`text-6xl font-semibold text-blue-100 group-hover:text-blue-200 transition-colors duration-300`}
                    >
                      {point.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-black group-hover:text-primary transition-colors mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{point.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          </div>
          </div>
      </div>
    </section>
  );
}

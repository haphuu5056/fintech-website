import HeroBanner from "@/components/common/HeroBanner";
import { services } from "@/data/data";
import { Card, CardHeader,CardBody } from "@nextui-org/react";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {

  return (
    <>
      <HeroBanner
        title="Services"
        subtitle="Our comprehensive suite of digital banking solutions helps you serve your customers better"
      />
      <section className="relative overflow-hidden bg-[#fafbfc]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Empowering You with Tailored Solutions{" "}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Unlock potential and drive growth with services designed to
              elevate your journey—reliable, innovative, and built to meet your
              unique needs.
            </p>
          </div>
          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                isBlurred
                key={index}
                className=" p-6 bg-background/2  hover:shadow-2xl transition-all duration-300 transform hover:shadow-blue-200"
              >
                <CardHeader className="relative">
                  <div className="w-12 h-12 bg-[#329BCA]/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-[#329BCA]">{service.icon}</div>
                    {/* <Sparkles
                      className="absolute -top-1 left-2 text-blue-500 opacity-20"
                      size={16}
                    /> */}
                  </div>
                </CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

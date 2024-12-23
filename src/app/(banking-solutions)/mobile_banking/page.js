import HeroBanner from "@/components/common/HeroBanner";
import {  mobileKeybenifts } from "@/data/data";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {Smartphone, Check,Users, CheckCircle2 } from "lucide-react";


const MobileBankingPage = () => {
  const features = [
    {
      title: "Experience true digital banking on the go",
      items: [
        "Instant P2P Transfers",
        "Real-Time Bill Payments",
        "Cardless Cash Withdrawals",
        "QR-Based Push Payments",
      ],
      icon: <Smartphone size={40} />, // Replace with any icon/image as needed
    },
    {
      title:
        "Enhance your customer engagement with our native mobile app solution",
      items: [
        "Advanced Access Features",
        "Fingerprint & PIN Login for Security",
        "Instant Push Notifications for Updates",
      ],
      icon: <Users size={40} />, // Replace with any icon/image as needed
    },
  ];
  return (
    <section className="bg-gray-50">
      <HeroBanner
        title=" Mobile Banking"
        subtitle="A secure and robust mobile banking application designed to meet all
            your financial needs on the go. Access seamless banking services
            across devices, including current accounts, savings, investments,
            and more."
      />

      {/* Features Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardBody className="p-6 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 text-primary">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Key Benefits Section */}
        <section className=" py-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileKeybenifts.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center  bg-gray-50 p-2"
              >
                <CardHeader>
                  <span className="text-2xl">{feature.icon}</span>
                </CardHeader>
                <CardBody>
                  <h3 className="text-lg">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

// Benefit Card Component


export default MobileBankingPage;

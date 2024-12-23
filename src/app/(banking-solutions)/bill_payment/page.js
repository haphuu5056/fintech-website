import HeroBanner from "@/components/common/HeroBanner";
import {
  CheckCircle2,
  Clock,
  Building2,
  Users,
  Shield,
  Bell,
  History,
  Smartphone,
} from "lucide-react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import billImage from "../../../../public/images/bill.jpg";
import Image from "next/image";
export default function BillPaymentPage() {
  return (
    <>
      <HeroBanner
        title="Bill Payment"
        subtitle="Enable Your Customers To Pay Bills"
      />
      <section className="bg-gray-50">
        <div className="container mx-auto px-6  py-16">
          {/* Main Features Section */}
          <div className="mb-20">
                 <div className="flex flex-col lg:flex-row items-start gap-12 p-8">
                    
                <div className="lg:w-1/2 relative">
                  <Image
                    src={billImage}
                    alt="Bill Payment"
                  className="w-[90%] h-full object-contain rounded-2xl" 
                  // style={{width :'90%' , height: 'full', objectFit: 'contain', borderRadius: '1rem'}}
                    priority
                  />
                  <div className="absolute -bottom-6 right-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-gray-800">Secure Payments</p>
                      <p className="text-sm text-gray-500">
                        Bank-grade encryption
                      </p>
                    </div>
                  </div>
                </div>

            
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Simplified Bill <span className="text-primary">Payments</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Let your customers manage and pay all their bills in one
                    place. From utilities to credit cards, we make bill payments
                    seamless and secure.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "One-Time Payments",
                        desc: "Quick and easy transactions",
                      },
                      {
                        title: "Recurring Schedules",
                        desc: "Automate regular payments",
                      },
                      {
                        title: "Multiple Billers",
                        desc: "All vendors in one place",
                      },
                      {
                        title: "Payment History",
                        desc: "Track all transactions",
                      },
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <div className="flex items-center gap-2 mb-2 ">
                          <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-red-200" />
                          </div>
                          <h3 className="font-semibold text-gray-800">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm pl-11">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-lg w-fit">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Recurring Payments
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Set up automatic payments for regular bills like rent,
                  mortgage, or utilities. Never miss a payment again.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-lg w-fit">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Multiple Institutions
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Pay other financial institutions, credit card companies, and
                  service providers directly from your account.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">Payee Management</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Easily add and manage companies or individuals you need to
                  pay. Store payee information securely.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Additional Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-transparent p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              Additional Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-gray-600">
                    Bank-level security for all bill payments with encryption
                    and fraud protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Bell className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Payment Reminders</h3>
                  <p className="text-gray-600">
                    Get notifications for upcoming payments and successful
                    transactions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <History className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Payment History</h3>
                  <p className="text-gray-600">
                    Access detailed payment history and download statements
                    anytime
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Mobile Access</h3>
                  <p className="text-gray-600">
                    Pay bills on the go with our mobile-responsive interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

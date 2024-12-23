import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { MessageCircle, CheckCircle2, Shield, Smartphone, Clock, Zap, Lock } from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";

export default function WhatsappBankingPage() {
   return (
    <section className="bg-gray-50">
      <HeroBanner
        title="WhatsApp Banking"
        subtitle="Access your banking services through WhatsApp - the most convenient way to bank. Get account information, make transfers, and more through simple chat commands."
      />

      {/* Main Features Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Hero Features */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-3xl"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 p-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle size={48} className="text-primary" />
                <h2 className="text-2xl font-bold text-gray-800">Chat-Based Banking Revolution</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience banking like never before through the familiar interface of WhatsApp. Simple commands, powerful features, and instant responses - all in one place.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Shield size={20} />
                <span className="font-medium">Bank-grade security</span>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              {[
                "Check account balance instantly",
                "Transfer funds securely",
                "Pay bills through chat",
                "Get mini statements",
                "End-to-end encryption",
                "Two-factor authentication",
                "No app installation required",
                "Available 24/7"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 ">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section with Visual Appeal */}
        <div className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose WhatsApp Banking?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0  rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="mt-1 ">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Familiar & Fast</h3>
                    <p className="text-gray-600">Use the interface you already know, get instant responses</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Quick response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>Intuitive chat commands</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0  rounded-2xl  "></div>
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="mt-1">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure & Available</h3>
                    <p className="text-gray-600">Bank securely 24/7 with enhanced protection</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Round-the-clock access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
   
}


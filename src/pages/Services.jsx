import React, { useState } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import {
  FaBug,
  FaCar,
  FaSnowflake,
  FaTools,
  FaBolt,
  FaBroom,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Pest Control",
    description: "Pest-free living at unbeatable value",
    icon: <FaBug size={32} />,
    points: ["Monthly plans available", "Safe chemicals", "Follow-up services"],
    price: "₹1499/year - 3 services",
  },
  {
    title: "Car Washing",
    description: "Reliable car care, Flawless shine",
    icon: <FaCar size={32} />,
    points: [
      "Daily & monthly options",
      "Eco-friendly products",
      "Trained professionals",
    ],
    price: "₹699/month",
  },
  {
    title: "AC/RO Service",
    description: "Efficient AC servicing to keep you cool",
    icon: <FaSnowflake size={32} />,
    points: [
      "Gas check & cleaning",
      "Energy efficiency check",
      "On-time service",
    ],
    price: "₹1999/service",
  },
  {
    title: "Plumbing",
    description: "Swift solutions for every leak",
    icon: <FaTools size={32} />,
    points: ["Emergency support", "Leak & pipe repair", "Transparent pricing"],
    price: "₹999/service",
  },
  {
    title: "Electrical",
    description: "Safe hands. Smart power",
    icon: <FaBolt size={32} />,
    points: ["Certified electricians", "Wiring & fixtures", "Safety checks"],
    price: "₹899/service",
  },
  {
    title: "Home Cleaning",
    description: "Deep cleaning for a healthier home",
    icon: <FaBroom size={32} />,
    points: ["Kitchen & bathroom", "Eco-safe products", "Trained staff"],
    price: "₹2499/session",
  },
];

const comparison = [
  {
    service: "Car Washing (Monthly)",
    market: "₹999",
    stonora: "₹699",
    save: "₹300 (30%)",
  },
  {
    service: "Pest Control (Yearly)",
    market: "₹3599",
    stonora: "₹1499",
    save: "₹2100 (60%)",
  },
  {
    service: "AC Service",
    market: "₹2999",
    stonora: "₹1999",
    save: "₹1000 (33%)",
  },
];

const faqs = [
  {
    question: "How does the subscription work?",
    answer:
      "You choose a plan, and our team schedules services at regular intervals. Payments are flexible—monthly or yearly.",
  },
  {
    question: "Are your service professionals verified?",
    answer:
      "Yes, all our professionals are background-checked, trained, and certified to ensure safe and reliable service.",
  },
  {
    question: "What if I'm not satisfied with a service?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy, we provide a free re-service or refund depending on the case.",
  },
  {
    question: "How quickly can I get emergency services?",
    answer:
      "Emergency requests are prioritized. In most cases, we can dispatch a professional within a few hours.",
  },
  {
    question: "Can I customize my service package?",
    answer:
      "Absolutely! You can mix and match services to create a package that fits your household needs and budget.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleGetStarted = () => {
    window.open(
      "https://wa.me/919890003000?text=Hi! I want to book a service.",
      "_blank"
    );
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-deepForest text-richGold">

      <section className="py-20 bg-richGold text-deepForest text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-6">
          Comprehensive home services at prices that make sense
        </p>
        <p className="font-semibold">
          ↘ Save up to 25% compared to market rates
        </p>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center ">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 ">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-between bg-[#EFE0CD] rounded-2xl shadow-md border border-gray-200 p-6 h-full hover:shadow-lg transition text-[#2D2D2D]"
              >
    
                <div className="flex flex-col items-center gap-3 text-center ">
                  <div className="w-14 h-14 rounded-full bg-richGold text-[#2D2D2D] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2D] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-3 text-left">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-deepForest mr-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom content */}
                <div className="pt-3 mt-3 border-t border-gray-200 text-center">
                  <p className="font-bold text-xl text-richGold mb-3">
                    {service.price}
                  </p>
                  <Button text="Get Started" onClick={handleGetStarted} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 text-center bg-gradient-to-b from-deepForest to-deepForest/90">
        <h2 className="text-4xl font-bold mb-3">See How Much You Save</h2>
        <p className="mb-10">Compare our prices with typical market rates</p>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border border-richGold rounded-xl overflow-hidden">
            <thead className="bg-richGold text-deepForest">
              <tr>
                <th className="p-4 text-left">Service</th>
                <th className="p-4">Market Rate</th>
                <th className="p-4">Stonora Price</th>
                <th className="p-4">You Save</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-t border-richGold/30">
                  <td className="p-4 text-left">{row.service}</td>
                  <td className="p-4">{row.market}</td>
                  <td className="p-4">{row.stonora}</td>
                  <td className="p-4 font-semibold">{row.save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm mt-6 opacity-80">
          *Average savings based on typical market rates in major Indian cities
        </p>

        <div className="mt-10 flex justify-center">
          <Button text="Get Started" onClick={handleGetStarted} />
        </div>
      </section>

    
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-10 opacity-80">
          Everything you need to know about our services
        </p>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className="border border-richGold rounded-xl px-6 py-5 hover:bg-richGold/10 transition cursor-pointer"
            >
              <p className="font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === i ? "▲" : "▼"}</span>
              </p>
              {openIndex === i && (
                <p className="text-sm mt-2 opacity-80">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

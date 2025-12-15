import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCheckCircle,
  FaUsers,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaLifeRing,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle className="text-richGold text-4xl" />,
    problem: "Unreliable service providers",
    solution: "Trained, verified professionals",
  },
  {
    icon: <FaUsers className="text-richGold text-4xl" />,
    problem: "Multiple vendors to manage",
    solution: "One subscription for everything",
  },
  {
    icon: <FaMoneyBillWave className="text-richGold text-4xl" />,
    problem: "Hidden charges and surprises",
    solution: "Transparent, fixed pricing",
  },
  {
    icon: <FaExclamationTriangle className="text-richGold text-4xl" />,
    problem: "No emergency support",
    solution: " 24/7 WhatsApp Assistance ",
  },
  {
    icon: <FaLifeRing className="text-richGold text-4xl" />,
    problem: "Quality concerns",
    solution: "100% satisfaction guarantee",
  },
];

function WhyChooseStonoraMarquee(props) {
  return (
    <section
      className="bg-deepForest text-white py-14 px-4"
      aria-label="Why Choose Stonora Marquee"
    >
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-richGold text-4xl font-bold mb-2">
          Why Choose Stonora?
        </h2>
        <p className="text-lg text-white/90">
          We solve the problems that matter most to homeowners
        </p>
      </div>
      <Marquee
        {...props}
        gradient={false}
        speed={60}
        className="marquee-container w-full overflow-visible"
        pauseOnHover
      >
        {reasons.map(({ icon, problem, solution }, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white rounded-xl p-6 shadow-lg mr-8 min-w-[320px] max-w-xs flex flex-col"
          >
            <div className="mb-4">{icon}</div>
            <div className="text-sm text-red-900 font-bold flex items-center gap-1 mb-1">
              <span aria-hidden="true" className="text-base"></span> PROBLEM
            </div>
            <p className="mb-4 text-gray-800 font-medium">{problem}</p>
            <hr className="h-px bg-gray-300 border-0 mb-4" />
            <div className="text-sm text-green-900 font-bold flex items-center gap-1 mb-1">
              <span
                aria-hidden="true"
                className="text-green-400 text-base"
              ></span>{" "}
              OUR SOLUTION
            </div>
            <p className="font-bold text-richGold">{solution}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default WhyChooseStonoraMarquee;

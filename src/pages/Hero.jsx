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
    <section className="bg-deepForest py-14 px-4">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-richGold text-4xl font-bold mb-2">
          Why Choose Stonora?
        </h2>
        <p className="text-[#2D2D2D]/80">
          We solve the problems that matter most to homeowners
        </p>
      </div>

      <Marquee
        {...props}
        gradient={false}
        speed={60}
        pauseOnHover
        className="w-full overflow-visible"
      >
        {reasons.map(({ icon, problem, solution }, i) => (
          <div key={i} className="flex-shrink-0 mr-8 min-w-[320px] max-w-xs">
            <div
              className="
                h-full rounded-2xl p-6
                bg-[#F6F1E8]
                shadow-lg
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              <div className="mb-4">{icon}</div>

              {/* PROBLEM */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-red-100 text-red-700">
                PROBLEM
              </div>
              <p className="mb-4 font-medium text-[#2D2D2D]">{problem}</p>

              <hr className="h-px bg-[#2D2D2D]/20 border-0 mb-4" />

              {/* SOLUTION */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-green-100 text-green-700">
                OUR SOLUTION
              </div>
              <p className="font-bold text-richGold">{solution}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default WhyChooseStonoraMarquee;

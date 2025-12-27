import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaLifeRing,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle className="text-richGold text-3xl" />,
    problem: "Unreliable service providers",
    solution: "Trained, verified professionals",
  },
  {
    icon: <FaUsers className="text-richGold text-3xl" />,
    problem: "Multiple vendors to manage",
    solution: "One subscription for everything",
  },
  {
    icon: <FaMoneyBillWave className="text-richGold text-3xl" />,
    problem: "Hidden charges and surprises",
    solution: "Transparent, fixed pricing",
  },
  {
    icon: <FaExclamationTriangle className="text-richGold text-3xl" />,
    problem: "No emergency support",
    solution: "24/7 WhatsApp Assistance",
  },
  {
    icon: <FaLifeRing className="text-richGold text-3xl" />,
    problem: "Quality concerns",
    solution: "100% satisfaction guarantee",
  },
];

const ReasonCard = ({ icon, problem, solution }) => {
  return (
    <div className="h-full rounded-3xl p-7 bg-[#EFE0CD] shadow-lg flex flex-col items-center text-center transition-all duration-300">
      <div className="mb-5">
        <div className="w-14 h-14 rounded-full bg-deepForest/10 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <span className="px-4 py-1 rounded-full text-xs font-bold mb-3 bg-red-100 text-red-700">
        PROBLEM
      </span>
      <p className="text-[#2D2D2D] font-medium mb-6">{problem}</p>

      <hr className="w-full h-px bg-[#2D2D2D]/20 border-0 mb-6" />

      <span className="px-4 py-1 rounded-full text-xs font-bold mb-3 bg-green-100 text-green-700">
        OUR SOLUTION
      </span>
      <p className="text-richGold font-bold text-base">{solution}</p>
    </div>
  );
};

const MobileCenterCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden relative w-full overflow-hidden py-8">
      <div className="flex items-center justify-center relative h-[360px]">
        {reasons.map((item, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + reasons.length) % reasons.length
              ? "left"
              : i === (index + 1) % reasons.length
              ? "right"
              : "hidden";

          return (
            <div
              key={i}
              className={`
                absolute transition-all duration-700 ease-in-out
                ${position === "center" && "z-20 scale-100 opacity-100"}
                ${position === "left" && "z-10 -translate-x-36 scale-90 opacity-50"}
                ${position === "right" && "z-10 translate-x-36 scale-90 opacity-50"}
                ${position === "hidden" && "opacity-0 scale-75"}
              `}
            >
              <div className="w-[260px]">
                <ReasonCard {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DesktopCenterCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block relative w-full overflow-hidden py-14">
      <div className="relative flex items-center justify-center h-[460px]">
        {reasons.map((item, i) => {
          const total = reasons.length;

          const position =
            i === index
              ? "center"
              : i === (index - 1 + total) % total
              ? "left1"
              : i === (index - 2 + total) % total
              ? "left2"
              : i === (index + 1) % total
              ? "right1"
              : i === (index + 2) % total
              ? "right2"
              : "hidden";

          return (
            <div
              key={i}
              className={`
                absolute transition-all duration-700 ease-in-out
                ${position === "left1" &&
                  "z-30 -translate-x-[260px] scale-[0.92] opacity-70"}
                ${position === "right1" &&
                  "z-30 translate-x-[260px] scale-[0.92] opacity-70"}
                ${position === "left2" &&
                  "z-20 -translate-x-[460px] scale-[0.85] opacity-45"}
                ${position === "right2" &&
                  "z-20 translate-x-[460px] scale-[0.85] opacity-45"}                
                ${position === "hidden" && "opacity-0 scale-75"}
              `}
            >
              <div className="w-[260px]">
                <ReasonCard {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function WhyChooseStonoraMarquee() {
  return (
    <section className="bg-deepForest py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-richGold text-4xl font-bold mb-3">
          Why Choose Stonora?
        </h2>
        <p className="text-white/80">
          We solve the problems that matter most to homeowners
        </p>
      </div>

      <MobileCenterCarousel />

      <DesktopCenterCarousel />
    </section>
  );
}

export default WhyChooseStonoraMarquee;

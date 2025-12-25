import {
  Users,
  Award,
  Heart,
  Target,
  Star,
  Puzzle,
  Diamond,
  Leaf,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { icon: Users, value: "75+ and counting", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Service Professionals" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" },
    { icon: Target, value: "25%", label: "Average Savings" },
  ];

  const values = [
    {
      icon: Puzzle,
      title: "Customer First",
      desc: "Your satisfaction is our top priority. We go above and beyond to ensure you're happy.",
    },
    {
      icon: Star,
      title: "Quality Service",
      desc: "All our service professionals are trained, verified, and committed to excellence.",
    },
    {
      icon: Diamond,
      title: "Transparency",
      desc: "No hidden charges, no surprises. What you see is what you pay.",
    },
    {
      icon: Leaf,
      title: "Innovation",
      desc: "We leverage technology to make home services simple, fast, and affordable.",
    },
  ];

  const testimonials = [
    {
      text: `"The pest control service at ₹1499/year is unbeatable."`,
      name: "Pratyush Bhatt",
      role: "Resident, Mumbai",
    },
    {
      text: `"As a busy professional, Stonora saves me so much time. Highly recommended!"`,
      name: "Soni Dubey",
      role: "Working Professional, Mumbai",
    },
    {
      text: `"Stonora has completely changed how I manage my home. Everything is just one WhatsApp message away!"`,
      name: "Kunal Pandya",
      role: "Working Professional, Mumbai",
    },
  ];
  const Stat = ({ value, label, color }) => (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-xs sm:text-sm text-[#F5F2EC]/70 mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="font-poppins text-[#D59E43] leading-relaxed">
      <section className="bg-[#D59E43] text-[#0C3024] py-20 text-center ">
        <h1 className="text-4xl font-bold">About Stonora</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Making home services accessible, affordable, and hassle-free — for
          everyone.
        </p>
      </section>

      <section className="bg-[#0C3024] py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <Icon size={42} className="text-[#D59E43]" />
              <h2 className="text-2xl font-bold mt-3">{value}</h2>
              <p className="text-sm opacity-80">{label}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#0C3024] min-h-screen flex items-center px-4 sm:px-6 py-16">
  <div className="max-w-7xl w-full mx-auto">
    <div
      className="border border-[#D59E43]/60 rounded-3xl
                 px-6 sm:px-10 md:px-20
                 py-16 sm:py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl
                       font-semibold text-[#D59E43] mb-4">
          Our Story
        </h2>
        <div className="w-20 h-[2px] bg-[#D59E43] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "The Vision",
            text: "Stonora was created to simplify home services that had become expensive, fragmented, and unreliable.",
            color: "#D59E43",
          },
          {
            title: "The Belief",
            text: "Finding trusted professionals should be effortless, transparent, and fast — without hidden costs.",
            color: "#E69138",
          },
          {
            title: "The Solution",
            text: "A single platform connecting customers with verified experts, exactly when they’re needed.",
            color: "#D59E43",
          },
          {
            title: "Today",
            text: "Serving thousands across major cities with rapid-response services under 30 minutes.",
            color: "#E69138",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#D59E43]/30
                       bg-[#00251a]/60
                       px-6 py-6 sm:py-7"
          >
            <h3
              className="font-semibold text-lg sm:text-xl mb-3"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>
            <p className="text-[#F5F2EC]/80 text-sm sm:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#D59E43]/30 max-w-4xl mx-auto">
        <Stat value="30 min" label="Response Time" color="#D59E43" />
        <Stat value="1000+" label="Customers" color="#E69138" />
        <Stat value="100%" label="Verified Experts" color="#D59E43" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-[#E69138] text-lg sm:text-xl font-medium">
          Save time. Save money. Live stress-free.
        </p>
      </div>
    </div>
  </div>
</section>

      

      <section className="bg-[#00251a] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <p className="opacity-80 mt-2">Don't just take our word for it</p>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-[#D59E43] p-6 rounded-2xl text-left hover:bg-[#0C3024] transition-colors"
            >
              <div className="flex mb-4 text-[#D59E43]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#D59E43" stroke="#D59E43" />
                ))}
              </div>

              <p className="italic mb-4">{t.text}</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="opacity-80 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

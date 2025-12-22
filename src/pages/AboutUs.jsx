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

  return (
    <div className="font-poppins text-[#D59E43] leading-relaxed">
      {/* HERO */}
      <section className="bg-[#D59E43] text-[#0C3024] py-20 text-center">
        <h1 className="text-4xl font-bold">About Stonora</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Making home services accessible, affordable, and hassle-free — for
          everyone.
        </p>
      </section>

      {/* STATS */}
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

      {/* STORY */}
      <section className="bg-[#00251a] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Story</h2>

        <div className="max-w-3xl mx-auto space-y-4 text-[#D59E43] text-justify">
          <p>
            Stonora was created because home services shouldn’t be complicated,
            expensive, or time-consuming.
          </p>
          <p>
            Our founders envisioned a single platform offering essential
            services at transparent, affordable prices.
          </p>
          <p>
            Today, we serve thousands across major cities, delivering everything
            from pest control to fast on-call repairs in under 30 minutes.
          </p>
          <p className="font-semibold">
            Save time. Save money. Live stress-free.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#00251a] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">Our Values</h2>
        <p className="opacity-80 mt-2">
          The principles that guide everything we do
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="border border-[#D59E43] rounded-2xl p-8 text-left hover:bg-[#0C3024] transition-colors"
            >
              <Icon size={40} className="text-[#D59E43]" />
              <h3 className="text-2xl font-semibold mt-4">{title}</h3>
              <p className="opacity-80 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
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

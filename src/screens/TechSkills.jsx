import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const SITE_URL = "https://slaty.vercel.app";

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/tech-skills#webpage`,
    name: "Tech Skills Training with Tutors in Nigeria | Slaty",
    url: `${SITE_URL}/tech-skills`,
    description:
      "Learn practical technology skills with Slaty. Connect with tutors, build your knowledge, and explore technology skills for personal and professional growth.",
    isPartOf: {
      "@type": "WebSite",
      name: "Slaty",
      url: `${SITE_URL}/`,
    },
    about: {
      "@type": "Thing",
      name: "Technology skills learning",
    },
  },
];

const skills = [
  {
    number: "01",
    icon: "💻",
    title: "Web Development",
    description:
      "Explore how websites work and learn the fundamentals of building for the web.",
    topics: ["HTML & CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Discover how to build applications for mobile devices and create useful digital experiences.",
    topics: ["React Native", "App fundamentals", "Mobile UI"],
  },
  {
    number: "03",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Learn to design intuitive, attractive interfaces that put users first.",
    topics: ["User research", "Wireframing", "Prototyping"],
  },
  {
    number: "04",
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Build your understanding of data and learn how to turn information into useful insights.",
    topics: ["Spreadsheets", "Data fundamentals", "Visualization"],
  },
  {
    number: "05",
    icon: "🛠️",
    title: "Digital Skills",
    description:
      "Strengthen your digital foundation and learn tools that support everyday work and projects.",
    topics: ["Digital productivity", "Online tools", "Problem-solving"],
  },
  {
    number: "06",
    icon: "🚀",
    title: "Programming Fundamentals",
    description:
      "Start learning how to think like a programmer and solve problems with code.",
    topics: ["Programming logic", "Algorithms", "Debugging"],
  },
];

const steps = [
  {
    number: "01",
    title: "Choose what you want to learn",
    description:
      "Explore technology topics and identify the skills that match your interests and goals.",
  },
  {
    number: "02",
    title: "Connect with a tutor",
    description:
      "Find a tutor who can guide you through concepts, answer questions, and support your learning.",
  },
  {
    number: "03",
    title: "Learn and practise",
    description:
      "Work through concepts, ask questions, and practise applying what you learn to real problems.",
  },
];

const faqs = [
  {
    question: "What technology skills can I learn with Slaty?",
    answer:
      "You can explore areas such as web development, mobile app development, UI/UX design, programming fundamentals, data skills, and digital productivity. Available topics depend on the tutors and learning opportunities on the platform.",
  },
  {
    question: "Do I need previous coding experience?",
    answer:
      "No. You can start with foundational concepts and gradually build your knowledge. When choosing a tutor, look for someone whose teaching approach matches your current skill level.",
  },
  {
    question: "Can I learn tech skills if I am a student?",
    answer:
      "Yes. Slaty is designed to connect learners with tutors, so you can explore skills alongside your other learning commitments and personal goals.",
  },
  {
    question: "How do I become a technology tutor on Slaty?",
    answer:
      "If you have technology knowledge you would like to teach, visit the Become a Tutor page to learn more about joining Slaty as a tutor.",
  },
  {
    question: "Will learning with Slaty guarantee me a job?",
    answer:
      "No platform can guarantee a job from learning alone. Building practical knowledge, practising consistently, and developing projects can help you prepare for future opportunities.",
  },
];

export default function TechSkills() {
  return (
    <>
      <SEO
        title="Tech Skills Training with Tutors in Nigeria | Slaty"
        description="Learn practical technology skills with Slaty. Connect with tutors, build your knowledge, and explore tech skills that support your personal and professional growth."
        path="/tech-skills"
        structuredData={pageSchema}
      />

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                <span aria-hidden="true">✦</span>
                Learn. Practise. Grow.
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Learn Tech Skills with Tutors on{" "}
                <span className="text-indigo-600">Slaty</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                Interested in technology but unsure where to start? Connect
                with tutors who can help you understand new concepts, practise
                your skills, and make progress at your own pace.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/online-tutoring"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  Explore Tutoring
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  to="/become-a-tutor"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-700"
                >
                  Become a Tutor
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-500">
                For beginners, students, and curious lifelong learners.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-purple-200/60 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-indigo-200/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-indigo-900/10 sm:p-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Your learning journey
                    </p>
                    <h2 className="mt-1 text-xl font-bold">
                      Skills start here.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                    💡
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      icon: "💻",
                      title: "Learn to code",
                      subtitle: "Understand the building blocks",
                      color: "bg-blue-50",
                    },
                    {
                      icon: "🎨",
                      title: "Explore design",
                      subtitle: "Turn ideas into interfaces",
                      color: "bg-purple-50",
                    },
                    {
                      icon: "📈",
                      title: "Build your knowledge",
                      subtitle: "Practise one step at a time",
                      color: "bg-emerald-50",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-indigo-200 hover:shadow-sm"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.subtitle}
                        </p>
                      </div>
                      <span className="ml-auto text-lg text-indigo-500">
                        →
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-indigo-600 p-5 text-white">
                  <p className="text-sm text-indigo-100">
                    Your next step
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    Find guidance that fits your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Explore your options
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What would you like to learn?
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Technology offers many ways to learn, create, and solve problems.
              Explore these areas to find a starting point that interests you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-300">
                    {skill.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{skill.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {skill.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-gray-500">
            These are examples of technology learning areas, not a guarantee
            that every topic currently has an available tutor on Slaty.
          </p>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                How Slaty works
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Turn curiosity into knowledge
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                You do not have to figure everything out alone. Take your
                learning one step at a time with guidance from a tutor.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-extrabold text-white shadow-lg shadow-indigo-600/20">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/online-tutoring"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Get Started
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Learn with purpose
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Build skills that grow with you
              </h2>
              <p className="mt-5 leading-7 text-gray-600">
                Whether you are exploring technology for the first time or
                strengthening what you already know, learning with guidance
                can help you approach new challenges with greater confidence.
              </p>

              <Link
                to="/online-tutoring"
                className="mt-7 inline-flex items-center font-semibold text-indigo-700 hover:text-indigo-900"
              >
                Explore learning support
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🧭",
                  title: "Clear direction",
                  description:
                    "Get guidance as you work toward your learning goals.",
                },
                {
                  icon: "🤝",
                  title: "Tutor support",
                  description:
                    "Ask questions and get help understanding difficult concepts.",
                },
                {
                  icon: "🧠",
                  title: "Stronger foundations",
                  description:
                    "Build your understanding before moving to more advanced topics.",
                },
                {
                  icon: "⚡",
                  title: "Practical growth",
                  description:
                    "Use what you learn to explore ideas and solve problems.",
                },
              ].map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {benefit.icon}
                  </span>
                  <h3 className="mt-4 font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                FAQs
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Questions about learning tech skills?
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                    {faq.question}
                    <span
                      className="shrink-0 text-xl text-indigo-600 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-4 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-indigo-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-200">
              Your learning journey starts here
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to explore what you can learn?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-indigo-100">
              Discover learning opportunities, connect with tutors, and take
              the next step toward your technology goals with Slaty.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/online-tutoring"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Find Learning Support
              </Link>
              <Link
                to="/become-a-tutor"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-indigo-300 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
              >
                Teach on Slaty
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

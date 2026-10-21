import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://slaty.vercel.app/online-tutoring#webpage",
  "url": "https://slaty.vercel.app/online-tutoring",
  "name": "Online Tutoring in Nigeria | Find Academic Help with Slaty",
  "description": "Connect with tutors and get help understanding challenging subjects with Slaty.",
  "isPartOf": { "@type": "WebSite", "@id": "https://slaty.vercel.app/#website", "name": "Slaty", "url": "https://slaty.vercel.app/" },
  "about": { "@type": "Thing", "name": "Online tutoring and academic support" },
  "inLanguage": "en-NG"
};

const faqs = [
  {
    question: "What is Slaty?",
    answer: "Slaty is an educational platform designed to help students connect with tutors, get academic support, and make learning more engaging."
  },
  {
    question: "Can I use Slaty to get help with difficult subjects?",
    answer: "Slaty is designed to help students find academic guidance and connect with tutors when they need support understanding challenging topics."
  },
  {
    question: "Is Slaty for students in Nigeria?",
    answer: "Slaty is focused on making tutoring and academic support more accessible to students in Nigeria."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": { "@type": "Answer", "text": answer }
  }))
};

export default function OnlineTutoring() {
  return (
    <main className="mx-auto w-full max-w-5xl py-16 text-white">
      <SEO
        title="Online Tutoring in Nigeria | Find Academic Help with Slaty"
        description="Need help with a difficult subject? Slaty helps students in Nigeria connect with tutors and access academic support to learn with confidence."
        path="/online-tutoring"
        structuredData={[pageSchema, faqSchema]}
      />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
        <Link to="/" className="underline hover:text-orange">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>Online tutoring</span>
      </nav>

      <header className="max-w-3xl">
        <p className="mb-3 font-semibold uppercase tracking-wide text-orange">Academic support with Slaty</p>
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl">
          Find online tutoring and academic help in Nigeria
        </h1>
        <p className="mb-8 text-lg leading-8 text-white/80">
          Everyone gets stuck sometimes. Slaty helps students find academic support, connect with tutors, and work through challenging topics with greater confidence.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/waitlist/students" className="rounded-lg bg-orange px-6 py-3 font-semibold text-black">
            Join as a student
          </Link>
          <Link to="/become-a-tutor" className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white">
            Become a tutor
          </Link>
        </div>
      </header>

      <section className="mt-16 grid gap-6 sm:grid-cols-3" aria-label="Benefits of Slaty">
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Get help with hard topics</h2>
          <p className="leading-7 text-white/75">Find academic guidance when a lesson, assignment topic, or concept is difficult to understand.</p>
        </article>
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Connect with tutors</h2>
          <p className="leading-7 text-white/75">Use Slaty to connect with tutors and explore support that fits your learning needs.</p>
        </article>
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Make learning engaging</h2>
          <p className="leading-7 text-white/75">Build understanding with academic support and learning resources designed to make studying feel more approachable.</p>
        </article>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="mb-5 text-2xl font-bold">How Slaty supports students</h2>
        <p className="mb-4 leading-8 text-white/80">
          Searching for online tutors can be overwhelming when you are not sure where to start. Slaty brings the idea of tutoring and academic support into one learning platform, helping students take the next step when they need guidance.
        </p>
        <p className="leading-8 text-white/80">
          Whether you want to revisit a challenging concept, strengthen your understanding, or make studying more productive, start by exploring Slaty and the support available through the platform.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="border-b border-white/15 pb-5">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="leading-7 text-white/75">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-white/15 p-8">
        <h2 className="mb-3 text-2xl font-bold">Ready to get academic support?</h2>
        <p className="mb-6 leading-7 text-white/75">Explore Slaty and take your next step toward learning with confidence.</p>
        <Link to="/" className="font-semibold text-orange underline">Explore Slaty</Link>
      </section>
    </main>
  );
}

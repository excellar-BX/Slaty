import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://slaty.vercel.app/become-a-tutor#webpage",
  "url": "https://slaty.vercel.app/become-a-tutor",
  "name": "Become a Tutor with Slaty | Support Student Learning",
  "description": "Learn about tutoring with Slaty and register your interest in helping students understand challenging subjects.",
  "isPartOf": { "@type": "WebSite", "@id": "https://slaty.vercel.app/#website", "name": "Slaty", "url": "https://slaty.vercel.app/" },
  "about": { "@type": "Thing", "name": "Tutoring and academic support" },
  "inLanguage": "en-NG"
};

const faqs = [
  {
    question: "Who can register interest in tutoring with Slaty?",
    answer: "People interested in helping students learn can register their interest through the Slaty tutor waitlist. Any specific eligibility requirements should be confirmed by Slaty when tutor onboarding opens."
  },
  {
    question: "How do I get started?",
    answer: "Use the tutor waitlist link on this page to register your interest and receive updates about the platform and tutor onboarding."
  },
  {
    question: "What is the purpose of Slaty?",
    answer: "Slaty aims to make learning more engaging by helping students connect with tutors, access academic support, and understand difficult topics."
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

export default function BecomeATutor() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform";

  return (
    <main className="mx-auto w-full max-w-5xl py-16 text-white">
      <SEO
        title="Become a Tutor with Slaty | Support Student Learning"
        description="Interested in tutoring? Register your interest with Slaty and help students in Nigeria understand challenging subjects and learn with confidence."
        path="/become-a-tutor"
        structuredData={[pageSchema, faqSchema]}
      />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
        <Link to="/" className="underline hover:text-orange">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>Become a tutor</span>
      </nav>

      <header className="max-w-3xl">
        <p className="mb-3 font-semibold uppercase tracking-wide text-orange">Teach with Slaty</p>
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl">
          Become a tutor and help students learn with confidence
        </h1>
        <p className="mb-8 text-lg leading-8 text-white/80">
          Great tutors make difficult ideas easier to understand. Slaty is building a learning platform that helps students connect with academic support—and invites interested tutors to register for updates.
        </p>
        <a 
          href={googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block rounded-lg bg-orange px-6 py-3 font-semibold text-black transition hover:opacity-95"
        >
          Join SLATY as a tutor
        </a>
      </header>

      <section className="mt-16 grid gap-6 sm:grid-cols-3" aria-label="Tutoring opportunities">
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Support understanding</h2>
          <p className="leading-7 text-white/75">Help learners work through concepts and build a stronger understanding of their subjects.</p>
        </article>
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Make learning approachable</h2>
          <p className="leading-7 text-white/75">Bring patience, clear explanations, and encouragement to students who need academic guidance.</p>
        </article>
        <article className="rounded-xl border border-white/15 p-6">
          <h2 className="mb-3 text-xl font-semibold">Stay informed</h2>
          <p className="leading-7 text-white/75">Register your interest to receive updates as Slaty develops its tutor experience and onboarding process.</p>
        </article>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="mb-5 text-2xl font-bold">Why tutor with a learning platform?</h2>
        <p className="leading-8 text-white/80">
          Students often need more than a textbook: they need an explanation that makes sense to them, encouragement to keep trying, and a way to ask questions. Slaty is designed around connecting learners with tutoring and academic support. If you are interested in helping students, the tutor waitlist is the best place to start.
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
        <h2 className="mb-3 text-2xl font-bold">Interested in teaching with Slaty?</h2>
        <p className="mb-6 leading-7 text-white/75">Register your interest and follow updates about tutor onboarding.</p>
        <a 
          href={googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold text-orange underline hover:opacity-95"
        >
          Join SLATY as a Tutor
        </a>
      </section>
    </main>
  );
}

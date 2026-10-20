import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  const faqs = [
    {
      title: "What is Slaty?",
      text: "Slaty is an educational platform designed to help students access tutoring, academic support, and learning resources.",
    },
    {
      title: "How can Slaty help students?",
      text: "Slaty aims to make learning more engaging by helping students understand difficult topics and find appropriate academic support.",
    },
    {
      title: "Can tutors join Slaty?",
      text: "Tutors can express their interest in joining Slaty through the tutor registration or waitlist process available on the website.",
    },
    {
      title: "How can I join Slaty as a student?",
      text: "Students can visit the student waitlist page to register their interest and receive updates about Slaty.",
    },
    {
      title: "Is Slaty available in Nigeria?",
      text: "Slaty is focused on helping students access academic support. Check the website for the latest information about availability and supported services.",
    },
  ];

  return (
    <section
      className="text-white py-16 mx-auto max-w-4xl"
      aria-labelledby="faq-heading"
    >
      <p className="text-center text-orange mb-3">
        Need to Know
      </p>

      <h2
        id="faq-heading"
        className="text-2xl sm:text-4xl font-bold text-center my-8"
      >
        Frequently Asked Questions About Slaty
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <Accordion
            key={faq.title}
            title={faq.title}
            text={faq.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;

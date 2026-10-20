import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TutorsWaitList from "./screens/TutorsWaitList";
import StudentWaitList from "./screens/StudentWaitList";
import Waitlist from "./screens/Waitlist";
import Slatylogo from "./assets/slatylogo.jpg";
import SEO from "./components/SEO";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Machine-readable schema for AI search engines and LLM crawlers
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Slaty",
    "url": "https://slaty.vercel.app/",
    "logo": "https://slaty.vercel.app/logo.png",
    "description": "An educational technology platform connecting students with digital tutors and providing academic support.",
    "serviceType": [
      "Digital Tutoring",
      "Academic Support",
      "Student Mentorship"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "sameAs": [
      "https://github.com/excellar-BX"
    ]
  };

  return loading ? (
    <div className="bg-black h-screen fixed flex items-center w-full justify-center">
      <img src={Slatylogo} className="w-[60%] sm:w-[40%] rounded-2xl" alt="Slaty logo" />
    </div>
  ) : (
    <div className="App bg-black transition-all ease-in-out duration-500 px-[5%] h-full mx-auto w-full">
      <Header />
      <Helmet>
        <script src="https://static.elfsight.com/platform/platform.js" async />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={
              <>
                <SEO 
                  title="Connect with a Tutor in Seconds | Slaty" 
                  description="Get the academic support you need, when you need it. Connect with tutors, understand difficult topics, and make learning more engaging with Slaty." 
                  path="/" 
                />
                <Helmet>
                  {/* JSON-LD Structured Data Injection for AI SEO */}
                  <script type="application/ld+json">
                    {JSON.stringify(jsonLdData)}
                  </script>
                </Helmet>
                <Home />
              </>
            } />
            <Route path="waitlist">
              <Route index element={<><SEO title="Join the Slaty Waitlist" description="Join the Slaty waitlist for updates about learning resources, tutoring, and academic support." path="/waitlist" noindex /><Waitlist /></>} />
              <Route path="tutors" element={<><SEO title="Tutor Waitlist | Slaty" description="Register your interest in tutoring with Slaty and get updates as the platform develops." path="/waitlist/tutors" noindex /><TutorsWaitList /></>} />
              <Route path="students" element={<><SEO title="Student Waitlist | Slaty" description="Join the Slaty student waitlist for updates on learning resources, tutoring, and academic support." path="/waitlist/students" noindex /><StudentWaitList /></>} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <div className="fixed bottom-20 right-10"><div className="elfsight-app-d2fe7d14-10ce-4b2b-86b2-9e894c9ac722" data-elfsight-app-lazy /></div>
      <Footer />
    </div>
  );
}
export default App;

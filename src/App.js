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
import OnlineTutoring from "./screens/OnlineTutoring";
import BecomeATutor from "./screens/BecomeATutor";
import ScrollToTop from "./components/ScrollToTop";
import TechSkills from "./screens/TechSkills";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const organizationSchema = { 
    "@context": "https://schema.org", 
    "@type": "EducationalOrganization", 
    "@id": "https://slaty.vercel.app/#organization", 
    "name": "Slaty", 
    "url": "https://slaty.vercel.app/", 
    "logo": { 
      "@type": "ImageObject", 
      "url": "https://slaty.vercel.app/slatylogo.png" 
    }, 
    "description": "Slaty is a learning platform that connects learners with tutors for academic subjects and practical technology skills.", 
    "knowsAbout": [ 
      "Online tutoring", 
      "Academic learning", 
      "Technology skills training", 
      "Programming", 
      "Web development", 
      "Digital skills", 
      "Personalized learning" 
    ] 
  }; 

  const websiteSchema = { 
    "@context": "https://schema.org", 
    "@type": "WebSite", 
    "@id": "https://slaty.vercel.app/#website", 
    "url": "https://slaty.vercel.app/", 
    "name": "Slaty", 
    "inLanguage": "en-NG", 
    "publisher": { 
      "@id": "https://slaty.vercel.app/#organization" 
    } 
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
        <ScrollToTop />
        <Routes>
          {/* Homepage Route */}
          <Route path="/">
            <Route index element={
              <>
                <SEO 
                  title="Slaty | Online Tutoring & Tech Skills Learning in Nigeria" 
                  description="Learn academic subjects and practical technology skills with Slaty. Connect with tutors, strengthen your knowledge, and develop skills for your future." 
                  path="/" 
                  structuredData={[organizationSchema, websiteSchema]}
                />
                <Home />
              </>
            } />

            {/* Cleaned-up Routes */}
            <Route path="online-tutoring" element={<OnlineTutoring />} />
            <Route path="become-a-tutor" element={<BecomeATutor />} />
            <Route path="/tech-skills" element={<TechSkills />} />

            {/* Waitlist Routes */}
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

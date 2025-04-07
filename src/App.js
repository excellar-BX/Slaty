import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet"
import { PuffLoader } from "react-spinners";
import Home from "./screens/Home";

import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TutorsWaitList from "./screens/TutorsWaitList";
import StudentWaitList from "./screens/StudentWaitList";
import Waitlist from "./screens/Waitlist";
import Slatylogo from "./assets/slatylogo.jpg";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [App]);

  return loading ? (

    
    <div className=" bg-black  h-screen fixed flex items-center w-full justify-center  ">
      <img src={Slatylogo} className="w-[60%] sm:w-[40%] rounded-2xl " alt="slaty-logo"/>
    </div>
  ) : (
    <div className="App bg-black transition-all ease-in-out duration-500 px-[5%] h-full mx-auto w-full ">
    
      <Header/>
    <Helmet> 
<script src="https://static.elfsight.com/platform/platform.js" async></script></Helmet> 
      <Router>
        <Routes>
         <Route path='/'>
          <Route index element={<Home />} />
          <Route path="waitlist" >
          <Route index element={<Waitlist/>} />
          <Route path="tutors" element={<TutorsWaitList/>} />
          <Route path="students" element={<StudentWaitList/>} />
          </Route>
         </Route>
        </Routes>
      </Router>
{/*<Faq/>*/}

<div class="elfsight-app-d2fe7d14-10ce-4b2b-86b2-9e894c9ac722 fixed bottom-20 right-10" data-elfsight-app-lazy></div>

      <Footer/>
    </div>
  );
}

export default App;

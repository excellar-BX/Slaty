import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import Home from "./screens/Home";

import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TutorsWaitList from "./screens/TutorsWaitList";
import StudentWaitList from "./screens/StudentWaitList";
import Waitlist from "./screens/Waitlist";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className=" bg-web-orange-700  h-screen bg-fixed  pt-[20%]  ">
      <h1>
        <PuffLoader color="#ffffff" size={100} className=" flex mx-auto  " />
      </h1>
    </div>
  ) : (
    <div className="App bg-black transition-all ease-in-out duration-500 px-[5%] h-full mx-auto w-full ">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;

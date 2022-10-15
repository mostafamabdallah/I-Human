import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../redux/store";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import SingleCourse from "./pages/singleCourse/SingleCourse";
const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/:id" element={<SingleCourse />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;

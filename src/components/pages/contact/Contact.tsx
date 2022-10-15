import React from "react";
import { useDispatch } from "react-redux";
import background from "../../../img/prottoy-hassan-283028-unsplash-Large.webp";
import { changeStyle } from "../../../redux/navSlice";
import ContactForm from "../../ContactForm";
import logo from "../../../img/logo-white.png";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(
    changeStyle({
      color: "white",
      logo: logo,
    })
  );
  return (
    <section
      className="min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen" style={{ backgroundColor: "#80d0e06b" }}>
        <div className="container flex flex-row items-center justify-center mx-auto min-h-screen pt-32 pb-32">
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;

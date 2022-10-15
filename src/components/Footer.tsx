import {
  faPhone,
  faLocationArrow,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary to-primary flex justify-center">
      <div className="container mx-auto flex flex-row flex-wrap py-24 gap-32 w-11/12 md:w-full">
        <div className="flex flex-col flex-1">
          <Link to="/" className="text-light text-2xl pt-5">
            <img src={logo} style={{ width: "100px" }} alt="" />
          </Link>
          <p className="text-xl mt-5 md:text-justify w-full md:w-8/12 lg:w-11/12">
            اكتشف 3 خطوات بسيطة اكتشفتها لاختراق الإنتاجية ، فهي تعمل٪ 100. هل
            تريد تغيير حياتك؟
          </p>
          <Link to="/about" className="text-light text-2xl pt-5">
            عنا
          </Link>
        </div>
        <div className="flex flex-col flex-2">
          <h3 className="text-secondary text-3xl">تواصل معنا</h3>
          <div className="pt-10">
            <div className="flex flex-row items-center">
              <FontAwesomeIcon
                className="pl-3 text-xl"
                icon={faLocationArrow}
              ></FontAwesomeIcon>
              <a href="#" className="text-xl">
                الرياض شارع النهضة مبني 4555{" "}
              </a>
            </div>
            <div className="flex flex-row items-center pt-5">
              <FontAwesomeIcon
                className="pl-3 text-xl"
                icon={faPhone}
              ></FontAwesomeIcon>
              <a href="tel:01146384940" className="text-xl">
                الجوال:01146384940
              </a>
            </div>
            <div className="flex flex-row items-center pt-5">
              <FontAwesomeIcon
                className="pl-3 text-xl"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <a href="mailto:mostafamabdllah94@gmail.com" className="text-xl">
                الايميل:info@Ihuman.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-secondary text-3xl">الروابط</h3>
          <div className="pt-10">
            <div className="flex flex-row items-center">
              <Link to="/" className="text-xl">
                الرئيسية
              </Link>
            </div>
            <div className="flex flex-row items-center pt-5">
              <Link to="/courses" className="text-xl">
                الكورسات
              </Link>
            </div>
            <div className="flex flex-row items-center pt-5">
              <Link to="/contact" className="text-xl">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

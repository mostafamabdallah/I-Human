import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import icon from "../img/62349-1920a.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Iprops {
  img: string;
}
const Course = ({ img }: Iprops) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className=" flex-auto  md:flex-1 flex flex-col items-center  rounded-lg bg-white"
    >
      <div className="w-full">
        <img width="100%" src={img} className="rounded-t-lg"></img>
        <div
          className="flex flex-col p-5  border "
          style={{ borderColor: "#cdcfd5" }}
        >
          <div className="flex items-center pb-10">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <h1 className="text-xl text-gray-600">
            التغذية: قم ببناء نظام غذائي مثالي وخطة وجبات
          </h1>
          <div className="flex flex-row flex-wrap mt-5">
            <div className="flex flex-row flex-wrap items-center">
              <FontAwesomeIcon
                className="text-primary"
                icon={faUser}
              ></FontAwesomeIcon>
              <span className="text-primary mr-2">30</span>
            </div>
            <div className="flex flex-row flex-wrap items-center mr-5">
              <FontAwesomeIcon
                className="text-primary"
                icon={faClock}
              ></FontAwesomeIcon>
              <span className="text-primary mr-2">0</span>
            </div>
          </div>
          <div
            className="flex flex-row flex-wrap mt-5 items-center"
            style={{ borderColor: "#cdcfd5" }}
          >
            <div className="w-2/12">
              <img src={icon} className="rounded-full"></img>
            </div>
            <div className="w-10/12 pr-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                <span className="text-gray-500 font-thin">بواسطة</span> مصطفي
                محمود
              </h1>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col p-5  border-b border-r border-l rounded-b-lg"
          style={{ borderColor: "#cdcfd5" }}
        >
          <Link
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/courses/1"
            className="px-10 py-2 border-primary border-2 text-primary text-center rounded-lg hover:bg-secondary hover:text-white"
          >
            احجز الان
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Course;

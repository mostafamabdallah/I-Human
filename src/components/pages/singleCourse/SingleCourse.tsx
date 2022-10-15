import { useParams } from "react-router-dom";
import Course from "../../Course";
import MyTabs from "../../MyTabs";
import image1 from "../../../img/course1-1-1.webp";
import image2 from "../../../img/course3-1.webp";
import image3 from "../../../img/course5-1.webp";
import NiceButton from "../../NiceButton";
import {
  faCertificate,
  faChartBar,
  faCheckCircle,
  faClock,
  faGraduationCap,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeStyle } from "../../../redux/navSlice";
import logoBlue from "../../../img/logo-black.png";

const imgs = [image1, image2, image3];

const SingleCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(
    changeStyle({
      color: "black",
      logo: logoBlue,
    })
  );
  return (
    <section>
      <div className="container mx-auto pt-44 flex flex-row flex-wrap justify-center md:justify-between">
        <div className="w-11/12 justify-center md:justify-start mb-5">
          <div className="flex items-center pb-5">
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
            <p className="text-gray-400 mr-5 text-lg">تقيم 4.5</p>
          </div>
          <h1 className="text-3xl text-black font-bold pb-10">
            دورة JavaScript الكاملة 2019
          </h1>
          <p className="text-xl text-gray-900">
            <span className="text-xl text-gray-500">تصنيفات:</span>computer
          </p>
        </div>
        <div className="w-11/12 md:w-8/12 flex flex-col pl-0 md:pl-10">
          <div className="videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yGDwk4z9EEg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-5">
            <MyTabs></MyTabs>
          </div>
        </div>
        <div className="w-11/12 md:w-4/12 flex flex-col">
          <div
            className="flex flex-col justify-center items-center p-5 border-2 border-gray-200 rounded-t-lg"
            style={{ backgroundColor: "#F4F6F9" }}
          >
            <h1 className="text-2xl text-black font-bold  w-full">مجاني</h1>
            <div className="flex flex-col  w-full">
              <NiceButton
                link={"contact"}
                icon={faCheckCircle}
                text={"أحجز الان"}
              ></NiceButton>
            </div>
            <p className="text-gray-400 text-sm mt-3 mb-5">
              حرية الوصول إلى هذه الدورة
            </p>
          </div>

          <div className="border-2 border-t-0 border-gray-200  rounded-b-lg p-5 pb-10">
            <p className="text-gray-500 text-lg">
              <FontAwesomeIcon
                className="ml-3"
                icon={faChartBar}
              ></FontAwesomeIcon>
              متوسط
            </p>
            <p className="text-gray-500 text-lg mt-3">
              <FontAwesomeIcon
                className="ml-3"
                icon={faGraduationCap}
              ></FontAwesomeIcon>
              185 إجمالي المسجلين
            </p>
            <p className="text-gray-500 text-lg mt-3">
              <FontAwesomeIcon
                className="ml-3"
                icon={faClock}
              ></FontAwesomeIcon>
              18 ساعة و 20 دقيقة المدة
            </p>
            <p className="text-gray-500 text-lg mt-3">
              <FontAwesomeIcon
                className="ml-3"
                icon={faRefresh}
              ></FontAwesomeIcon>
              17 مايو 2019 آخر تحديث
            </p>
            <p className="text-gray-500 text-lg mt-3">
              <FontAwesomeIcon
                className="ml-3"
                icon={faCertificate}
              ></FontAwesomeIcon>
              شهادة إتمام
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-full mt-10 gap-10 mb-10">
          <h1 className="text-3xl text-black  w-full">دورات ذات صلة</h1>
          {imgs.map((img) => {
            return <Course img={img}></Course>;
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleCourse;

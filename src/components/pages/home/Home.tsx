import { motion } from "framer-motion";
import React, { FC } from "react";
import icon2 from "../../../img/logo-03.webp";
import icon3 from "../../../img/logo-05.webp";
import icon4 from "../../../img/logo-08.webp";
import icon5 from "../../../img/logo-15.webp";
import background from "../../../img/myoung-kang-569499-unsplash-Custom.webp";
import hero2 from "../../../img/hero3.jpg";
import Card from "./Card";
import Course from "../../Course";
import image1 from "../../../img/course1-1-1.webp";
import image2 from "../../../img/course3-1.webp";
import image3 from "../../../img/course5-1.webp";
import {
  faBookmark,
  faBookOpen,
  faBrain,
  faPersonRays,
} from "@fortawesome/free-solid-svg-icons";
import NiceButton from "../../NiceButton";
import { changeStyle } from "../../../redux/navSlice";
import { useDispatch } from "react-redux";
import logo from "../../../img/logo-white.png";
import { Link } from "react-router-dom";
const imgs = [image1, image2, image3];

const Home: FC = () => {
  const dispatch = useDispatch();
  dispatch(
    changeStyle({
      color: "white",
      logo: logo,
    })
  );
  return (
    <>
      <section id="hero" className="relative">
        <div className="overlay">
          <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-start pb-14 pt-24">
            <div className="w-11/12 md:w-6/12 flex-col justify-center flex-wrap flex items-center md:items-start ">
              <motion.p
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="inline px-10 py-4 rounded-r-full rounded-bl-full font-bold"
                style={{
                  backgroundColor: "#ffffff4f",
                }}
              >
                نحن I-Human{" "}
              </motion.p>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="text-6xl font-bold  mt-5 md:text-right text-center font-primary"
              >
                تكافح في الحياة؟
                <br></br>
                يمكننا المساعدة.
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
                className="text-2xl mt-5 md:text-justify text-center w-full md:w-8/12 lg:w-11/12"
              >
                إيصال الانسان بذاته وتعريفه بشكل أكبر علي جوانب شخصيته ورفع درجة
                وعيه ليتمكن من مواجهة الصعوبات والتحديات التي تواجه
              </motion.p>
              <motion.div
                className="button"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
              >
                <Link
                  to="/about"
                  className=" text-light px-10 py-5 mt-5 button font-bold rounded-md"
                >
                  احصل على دليلك المجاني الآن
                </Link>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 2,
                }}
                className="flex flex-wrap mt-10 gap-5 justify-center md:justify-start xl:pb-0"
              >
                <img className="w-2/12" src={icon2}></img>
                <img className="w-2/12" src={icon3}></img>
                <img className="w-2/12" src={icon4}></img>
                <img className="w-2/12" src={icon5}></img>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1665324878">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="flex flex-row justify-center">
        <div className="container mx-auto min-h-screen  flex flex-col items-center flex-wrap justify-center w-11/12 md:w-full">
          <p className="inline px-10 py-4 rounded-r-full rounded-bl-full font-bold bg-primary">
            أنا مدرب حياة.
          </p>
          <h1
            className="text-secondary font-bold text-6xl mt-5 text-center"
            style={{ lineHeight: "8vh" }}
          >
            الخدمات التي تقدمها<br></br> I-Human
          </h1>
          <p className="text-mygray text-xl mt-8 text-center">
            تنقسم الخدامات في I-Human الي قسمين : <br></br>خدمات حضورية وخدمات
            اون لاين{" "}
          </p>
          <div className="flex flex-row flex-wrap w-full gap-16 mt-10">
            <Card
              icon={faPersonRays}
              head="POC"
              body="ختصار لكلمة Power of Change وتعني قوة التغيير"
              category=" اون لاين"
              color="#EAFDFF"
            ></Card>
            <Card
              icon={faBrain}
              head="NLP"
              body="Neuro Linguistic Programming البرمجة اللغوية العصبية "
              category=" اون لاين"
              color="#E4FFE7"
            ></Card>
            <Card
              icon={faBookOpen}
              head="استشارات "
              category=" اون لاين"
              body="استشارات من خلال كوتش معتمد بسعر رمزي  "
              color="#F8F6DC"
            ></Card>
          </div>

          <NiceButton icon={faBookmark} text="المزيد" link="about"></NiceButton>
        </div>
      </section>
      <section
        className="min-h-fit mt-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{ backgroundColor: "#00000073" }}
          className="w-full min-h-fit"
        >
          <div className="container mx-auto flex w-11/12 md:w-full flex-wrap items-center min-h-fit  justify-between gap-20 py-36">
            <div className="flex-1 flex-col">
              <h1
                className="text-7xl font-thin text-center"
                style={{ fontFamily: "monospace" }}
              >
                500+
              </h1>
              <p className="text-xl text-center">عملاء سعداء</p>
            </div>
            <div className="flex-1 flex-col">
              <h1
                className="text-7xl font-thin text-center"
                style={{ fontFamily: "monospace" }}
              >
                70+
              </h1>
              <p className="text-xl text-center">دروس على الإنترنت</p>
            </div>
            <div className="flex-1 flex-col">
              <h1
                className="text-7xl font-thin text-center"
                style={{ fontFamily: "monospace" }}
              >
                100%
              </h1>
              <p className="text-xl text-center">إرضاء العملاء</p>
            </div>
            <div className="flex-1 flex-col">
              <h1
                className="text-7xl font-thin text-center"
                style={{ fontFamily: "monospace" }}
              >
                100%
              </h1>
              <p className="text-xl text-center">الدعم الفتي</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="container mx-auto flex flex-wrap items-center min-h-screen justify-center lg:justify-between ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-11/12 lg:w-6/12 flex flex-col justify-start items-center md:items-start"
          >
            <h1 className="text-secondary text-2xl font-bold text-center md:text-right pt-10 md:pt-0">
              — عنا
            </h1>
            <p className="text-mygray text-lg text-center md:text-right">
              مرحبا سعدت بلقائك!
            </p>
            <h1 className="text-secondary font-bold text-6xl  w-full md:w-9/12 mt-10 text-center md:text-right">
              فكرة I-Human
            </h1>
            <p className="text-mygray text-lg mt-5  w-full md:w-10/12 text-center md:text-justify">
              تتمحور فكرة I HUMAN حول إيصال الانسان بذاته وتعريفه بشكل أكبر علي
              جوانب شخصيته ورفع درجة وعيه ليتمكن من مواجهة الصعوبات والتحديات
              التي تواجه من خلال تقديم استشارات وتدريبات يطور فيها حياته الشخصية
              والمهنية ليصبح مُلهم وذات تأثير في مجتمعه ووطنه
            </p>
            <p className="text-mygray text-lg mt-5  w-full md:w-10/12 text-center md:text-justify">
              وكل ذلك يحدث من خلال منصة رقمية تتيح للأفراد طلب استشارات اونلاين
              تقدم عن طريق متخصصين في علوم الكوتشينج لطلب المساعدة في أمور تخص
              حياتهم او مشاكل يعانون منها حيث يمكنهم أيضا الالتحاق بالبرامج
              التدريبة المقدمة من I HUMAN
            </p>
            <NiceButton icon={faBookmark} text="المزيد" link=""></NiceButton>
          </motion.div>
          <div className="w-full sm:w-auto lg:w-6/12 mt-10 md:mt-0 flex relative justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              src={hero2}
              className="rounded-full"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="absolute h-32 w-32 bg-primary -bottom-12 left-1/2 -translate-x-1/2 rounded-3xl"
            >
              <h1 className="text-light text-6xl text-center">24</h1>
              <p className="text-light text-lg text-center">
                سنوات <br></br> من خبرة
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-row justify-center min-h-screen py-32"
        style={{ backgroundColor: "#eafdff" }}
      >
        <div className="container mx-auto min-h-screen  flex flex-col items-center flex-wrap justify-center w-11/12 md:w-full">
          <p className="inline px-10 py-4 rounded-r-full rounded-bl-full font-bold bg-primary">
            أنا مدرب حياة.
          </p>
          <h1 className="text-secondary font-bold text-6xl mt-5 text-center ">
            الخدمات التي أقدمها<br></br> لعملائي
          </h1>
          <p className="text-mygray text-lg mt-8">
            يمكنني مساعدتك في هذه المجالات بالذات.
          </p>
          <div className="flex flex-row flex-wrap w-full mt-10 gap-10">
            {imgs.map((img, i) => {
              return <Course key={i} img={img}></Course>;
            })}
          </div>

          <div className="flex w-full items-center justify-center">
            <NiceButton
              icon={faBookmark}
              text="المزيد"
              link="courses"
            ></NiceButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

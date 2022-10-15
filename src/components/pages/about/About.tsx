import { motion } from "framer-motion";
import NiceButton from "../../NiceButton";
import hero2 from "../../../img/Canva-Happy-Mature-Woman-Wearing-Eyeglasses-1920s.webp";
import background from "../../../img/usukhbayar-gankhuyag-1003789-unsplash-Custom.webp";
import background2 from "../../../img/prottoy-hassan-283028-unsplash-Large.webp";
import {
  faBook,
  faBookmark,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import FlowElements from "../../FlowElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Course from "../../Course";

import image1 from "../../../img/course1-1-1.webp";
import image2 from "../../../img/course3-1.webp";
import image3 from "../../../img/course5-1.webp";
import MeetOurTeamItem from "../../MeetOurTeamItem";

import person1 from "../../../img/2.jpg";
import person2 from "../../../img/0b32e1fa-df03-3333-0282-3c4069b3e47d.jpg";
import person3 from "../../../img/3.jpg";
import { useDispatch } from "react-redux";
import { changeStyle } from "../../../redux/navSlice";

import logoBlue from "../../../img/logo-black.png";

interface Person {
  img: string;
  name: string;
  position: string;
  describe: string;
}

const persons: Person[] = [
  {
    img: person1,
    name: "علاء محمد",
    position: "المدير",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
  {
    img: person2,
    name: "يسرا محمد",
    position: "مدير الفرع",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
  {
    img: person3,
    name: "مصطفي علي",
    position: "الدعم الفني",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
];

const imgs = [image1, image2, image3];

const About = () => {
  const dispatch = useDispatch();
  dispatch(
    changeStyle({
      color: "black",
      logo: logoBlue,
    })
  );
  return (
    <>
      <section
        className="min-h-screen pt-32"
        style={{ backgroundColor: "#eafdff" }}
      >
        <div className="container mx-auto flex flex-wrap items-center min-h-screen justify-center lg:justify-between ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-11/12 lg:w-6/12 flex flex-col justify-start items-center md:items-start"
          >
            <h1 className="text-secondary text-2xl font-bold text-center md:text-right pt-10 md:pt-0">
              — من نحن
            </h1>
            <p className="text-mygray text-lg text-center md:text-right">
              مرحبا سعدت بلقائك!
            </p>
            <h1 className="text-secondary font-bold text-6xl  w-full md:w-9/12 mt-10 text-center md:text-right">
              أنا أساعد الأفراد ليصبحوا أفضل نسخة.
            </h1>
            <p className="text-mygray text-lg mt-5  w-full md:w-9/12 text-center md:text-justify">
              أنا سعيد لأنك وصلت إلى هنا لإرسال إشارة استغاثة ، وإبلاغ مجلس
              الشيوخ بأن جميع من كانوا على متن الطائرة قد قتلوا. دانتوين. لن
              أذهب إلى Alderaan. أنا حقا يجب أن أذهب.
            </p>
            <p className="text-mygray text-lg mt-5  w-full md:w-9/12 text-center md:text-justify">
              لكن هذا بالنسبة لي. أرسل إشارة استغاثة وأبلغ مجلس الشيوخ بأن جميع
              من كانوا على متنها قتلوا. دانتوين. هم على دانتوين. ستعود الخطط
              التي تشير إليها قريبًا في أيدينا. الدران؟ لن أذهب إلى Alderaan.
              يجب أن أذهب إلى المنزل.
            </p>
            <NiceButton icon={faBookmark} text="الكورسات" link=""></NiceButton>
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
      <section>
        <div className="container min-h-screen mt-32 flex flex-col justify-center pb-32">
          <h1 className="text-secondary font-bold text-6xl text-center">
            قصة نجاحنا
          </h1>
          <p className="text-mygray text-lg mt-8 text-center">
            تعرف علي قصه نجاحنا
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start mt-16 relative">
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="left-0 -ml-2"
                head="أنت تقرر حقًا تحسين نفسك"
                body="
        ممغنط بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها. ممغنط
        بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها."
              ></FlowElements>
            </div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center ">
              <FontAwesomeIcon
                style={{ zIndex: 2 }}
                className="text-2xl text-white p-6 bg-mygreen rounded-full"
                icon={faUser}
              ></FontAwesomeIcon>
            </div>
            <div className="w-0 md:w-5/12"></div>
            <div
              className="absolute top-1/2  left-1/2 line w-1 bg-mygreen"
              style={{ zIndex: 1 }}
            ></div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-end mt-16 relative">
            <div className="w-0 md:w-5/12"></div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center  ">
              <FontAwesomeIcon
                className="text-2xl text-white p-6 bg-mygreen rounded-full"
                icon={faBook}
              ></FontAwesomeIcon>
            </div>
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="right-0 -mr-2"
                head="أنت تقرر حقًا تحسين نفسك"
                body="
        ممغنط بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها. ممغنط
        بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها."
              ></FlowElements>
            </div>
            <div
              className="absolute top-1/2  left-1/2 line w-1 bg-mygreen"
              style={{ zIndex: 1 }}
            ></div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start mt-16 relative">
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="left-0 -ml-2"
                head="أنت تقرر حقًا تحسين نفسك"
                body="
        ممغنط بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها. ممغنط
        بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها."
              ></FlowElements>
            </div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-2xl text-white p-6 bg-mygreen rounded-full"
                icon={faUser}
              ></FontAwesomeIcon>
            </div>
            <div className="w-0 md:w-5/12"></div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundPositionY: "bottom",
          minHeight: "65vh",
        }}
      >
        <div
          className="py-36 flex flex-col justify-center"
          style={{
            backgroundColor: "#80d0e073",
            minHeight: "65vh",
          }}
        >
          <h1 className="text-6xl text-center">رؤيتنا</h1>
          <p className="text-2xl text-center mt-10 w-8/12 mx-auto">
            {" "}
            لكن هذا بالنسبة لي. أرسل إشارة استغاثة وأبلغ مجلس الشيوخ بأن جميع من
            كانوا على متنها قتلوا. دانتوين. هم على دانتوين. ستعود الخطط التي
            تشير إليها قريبًا في أيدينا. الدران؟ لن أذهب إلى Alderaan. يجب أن
            أذهب إلى المنزل.
          </p>
        </div>
      </section>
      <section
        className="flex flex-row justify-center min-h-screen py-32"
        style={{ backgroundColor: "#eafdff" }}
      >
        <div className="container mx-auto min-h-screen  flex flex-col items-center flex-wrap justify-center w-11/12 md:w-full">
          <h1 className="text-secondary font-bold text-6xl mt-5 text-center ">
            استمتع بالكورسات <br></br>الان
          </h1>
          <p className="text-mygray text-lg mt-8">
            يمكنني مساعدتك في هذه المجالات بالذات.
          </p>
          <div className="flex flex-row flex-wrap w-full mt-10 gap-10">
            {imgs.map((img) => {
              return <Course img={img}></Course>;
            })}
          </div>

          <div className="flex w-full items-center justify-center">
            <NiceButton icon={faBookmark} text="المزيد" link=""></NiceButton>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${background2})`,
          backgroundAttachment: "fixed",
          backgroundPositionY: "bottom",
          minHeight: "65vh",
        }}
      >
        <div
          className="py-36 flex flex-col justify-center"
          style={{
            backgroundColor: "#80d0e073",
            minHeight: "65vh",
          }}
        >
          <h1 className="text-6xl text-center">مهمتنا</h1>
          <p className="text-2xl text-center mt-10 w-8/12 mx-auto">
            {" "}
            لكن هذا بالنسبة لي. أرسل إشارة استغاثة وأبلغ مجلس الشيوخ بأن جميع من
            كانوا على متنها قتلوا. دانتوين. هم على دانتوين. ستعود الخطط التي
            تشير إليها قريبًا في أيدينا. الدران؟ لن أذهب إلى Alderaan. يجب أن
            أذهب إلى المنزل.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center min-h-screen py-32 items-center">
        <h1 className="text-secondary font-bold text-6xl mt-5 text-center ">
          فريق اي هيومان
        </h1>
        <p className="text-mygray text-lg mt-8 w-full text-center">
          يمكنني مساعدتك في هذه المجالات بالذات.
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-32 mt-20 mb-10 w-11/12 md:w-full">
          {persons.map((person: Person, i) => {
            return <MeetOurTeamItem key={i} data={person}></MeetOurTeamItem>;
          })}
        </div>
        <NiceButton icon={faPhone} text="تواصل معنا" link=""></NiceButton>
      </section>
    </>
  );
};

export default About;

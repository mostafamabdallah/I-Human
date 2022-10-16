import { motion } from "framer-motion";
import NiceButton from "../../NiceButton";
import hero2 from "../../../img/hero3.jpg";
import background from "../../../img/usukhbayar-gankhuyag-1003789-unsplash-Custom.webp";
import background2 from "../../../img/prottoy-hassan-283028-unsplash-Large.webp";
import {
  faBook,
  faBookmark,
  faBookOpen,
  faBookReader,
  faBrain,
  faCartArrowDown,
  faCertificate,
  faClock,
  faMedal,
  faPeopleRoof,
  faPersonRays,
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
import Card from "../home/Card";

interface Person {
  img: string;
  name: string;
  position: string;
  describe: string;
}

const persons: Person[] = [
  {
    img: person1,
    name: "علاء صادق ",
    position: "المدير",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
  {
    img: person2,
    name: "مريم الشامسي",
    position: "مدير الفرع",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
  {
    img: person3,
    name: " احمد لطيف ",
    position: "الدعم الفني",
    describe: "المدير التنفيزي للشركة والقائم باعمال الشركه لحين وصول اي شخص",
  },
];

const successStory = [
  {
    head: "",
    body: "لم تكن فكرة I HUMAN وليدة اللحظة حيث بدأت الشركة في مصر منذ أكثر من 10 سنين من العمل المتواصل وتقديم الدعم المباشر لكل المتدربين المنتسبين للبرامج التدريبية",
  },
  {
    head: "",
    body: "من خلال نجاحنا في مصر ودراسة السوق الامارات ولثقتنا الكبيرة فيما نقدم وفي برامجنا التدريبية تم عمل اول برنامج تدريبي في شهر يونيو 2022 POC Power of Change وحضر البرنامج العديد من الأشخاص الذين اخذو قرار بالتغير",
  },
  {
    head: "",
    body: "وحتي تلك اللحظة نري ما يقدمون من انجازات علي ارض الواقع كلٌ فيما يحب   سنعرض قصص نجاحهم تباعاُ لتتعرفوا عليهم اكثر ربما تكون واحد منهم ",
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
            رحلة نجاح I HUMAN
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start mt-8 relative">
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="left-0 -ml-2"
                head="فكرة I-Human"
                body="لم تكن فكرة I HUMAN وليدة اللحظة حيث بدأت الشركة في مصر منذ أكثر من 10 سنين من العمل المتواصل وتقديم الدعم المباشر لكل المتدربين المنتسبين للبرامج التدريبية"
              ></FlowElements>
            </div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center ">
              <FontAwesomeIcon
                style={{ zIndex: 2 }}
                className="text-2xl text-white p-6 bg-primary rounded-full"
                icon={faBrain}
              ></FontAwesomeIcon>
            </div>
            <div className="w-0 md:w-5/12"></div>
            <div
              className="absolute top-1/2  left-1/2 line1 w-1 bg-primary"
              style={{ zIndex: 1 }}
            ></div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-end mt-8 relative">
            <div className="w-0 md:w-5/12"></div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center  ">
              <FontAwesomeIcon
                style={{ zIndex: 2 }}
                className="text-2xl text-white p-6 bg-primary rounded-full"
                icon={faBook}
              ></FontAwesomeIcon>
            </div>
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="right-0 -mr-2"
                head="نجاحنا في مصر "
                body="
                من خلال نجاحنا في مصر ودراسة السوق الامارات ولثقتنا الكبيرة فيما نقدم وفي برامجنا التدريبية تم عمل اول برنامج تدريبي في شهر يونيو 2022 POC Power of Change وحضر البرنامج العديد من الأشخاص الذين اخذو قرار بالتغير"
              ></FlowElements>
            </div>
            <div
              className="absolute top-1/2  left-1/2 line2 w-1 bg-primary"
              style={{ zIndex: 1 }}
            ></div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start mt-8 relative">
            <div className="w-9/12 md:w-5/12">
              <FlowElements
                dir="left-0 -ml-2"
                head="انجازات المتدربين"
                body="
                وحتي تلك اللحظة نري ما يقدمون من انجازات علي ارض الواقع كلٌ فيما يحب   سنعرض قصص نجاحهم تباعاُ لتتعرفوا عليهم اكثر ربما تكون واحد منهم "
              ></FlowElements>
            </div>
            <div className="w-3/12 md:w-2/12 flex justify-center items-center ">
              <FontAwesomeIcon
                style={{ zIndex: 2 }}
                className="text-2xl text-white p-6 bg-primary rounded-full"
                icon={faClock}
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
            نتطلع لنكون الخيار الأنسب والأفضل للتدريب وتقديم استشارات اللايف
            كوتشينج في دولة الامارات.
          </p>
          <h1 className="text-6xl text-center mt-10">رسالتنا</h1>
          <p className="text-2xl text-center mt-10 w-8/12 mx-auto">
            {" "}
            إيصال القيم العليا والأخلاق وان نكون مرشدا فكريا ونفسيا وروحيا من
            خلال تدريبات عملية تُنير الفكر وتلهم العقل وتشعل الحماس لتحقيق نتائج
            ملموسة لكل من ينتسب الينا.
          </p>
        </div>
      </section>
      <section className="flex flex-row justify-center pb-32 pt-32">
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
              category=" حضوري"
              color="#EAFDFF"
            ></Card>
            <Card
              icon={faBrain}
              head="NLP"
              body="Neuro Linguistic Programming البرمجة اللغوية العصبية "
              category="حضوري"
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
          <div className="flex flex-row flex-wrap w-full gap-16 mt-10">
            <Card
              icon={faBook}
              head="كورسات "
              body="كورسات اونلاين بسعر رمزي  "
              category=" اون لاين"
              color="#E4FFE7"
            ></Card>
            <Card
              icon={faPeopleRoof}
              head="Soft Skills"
              body="I HUMAN Soft Skills"
              category="حضوري"
              color="#EAFDFF"
            ></Card>
            <Card
              icon={faBookReader}
              head="Coaching Program "
              body="Coaching Program"
              category="حضوري"
              color="#E4FFE7"
            ></Card>
          </div>
          <div className="flex flex-row flex-wrap w-full gap-16 mt-10">
            <Card
              icon={faMedal}
              head="MS "
              body="Motivational speaker"
              category="حضوري"
              color="#EAFDFF"
            ></Card>

            <Card
              icon={faCartArrowDown}
              head="منتجات  "
              category=" اون لاين"
              body="(تيشيرت – باند الطاقة – نباتات الوفرة - عطر السعادة – أقلام الثراء – ملزمات الأهداف والنجاح – ملزمات الكترونية يمكن طباعتها)"
              color="#F8F6DC"
            ></Card>
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
          <h1 className="text-6xl text-center">اهدافنا</h1>
          <p className="text-2xl text-center mt-10 w-8/12 mx-auto">
            <ul className="list-decimal text-center inline-table ">
              <li className="text-center">
                تقديم 10 مخيمات تدريبية في السنة الاولي من الانطلاق في دولة
                الامارات العربية المتحدة
              </li>
              <li>
                تقديم 1000 استشارة للأشخاص المهتمين بتطوير الجوانب الشخصية او
                المهنية في السنة الاولي من الانطلاق
              </li>
              <li>
                عرض 20 قصة نجاح المستفيدين من برامجنا التدريبية والاحتفاء بهم في
                السنة الاولي من الانطلاق
              </li>
              <li>
                تدريب 500 شخص يري في نفسه ويحلم ان يكون مدرب او لايف كوتش ومتحدث
                تحفيزي ومستشار يساعد الأشخاص علي الارتقاء بذواتهم لتأهيلهم من
                خلال برامج خاصة جدا
              </li>
              <li>
                تخريج اول دفعة معتمدة 10 اشخاص معتمدين لايف كوتش ومتحدث تحفيزي
                من دولة الامارات
              </li>
            </ul>{" "}
          </p>
          <h1 className="text-6xl text-center mt-10">قيمنا</h1>
          <p className="text-2xl text-center mt-10 w-8/12 mx-auto">
            {" "}
            الثقة, القوة ,الحكمة ,الالهام ,الوفرة الشجاعة ,الحب ,التعاون ,الوعي
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

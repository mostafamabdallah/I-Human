import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MyTabs = () => {
  const [readMore, setReadMore] = useState({
    style: "none",
    element: <FontAwesomeIcon className="mr-3" icon={faPlus}></FontAwesomeIcon>,
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-gray-200 border-b-2">
        <div
          className="w-fit px-5 py-3 text-gray-400 text-xl cursor-pointer border-b-2 border-primary"
          onClick={() => {}}
        >
          معلومات
        </div>
        <div className="w-fit px-5 py-3 text-gray-400 text-xl cursor-pointer">
          تقيمات
        </div>
      </div>
      <div className="content">
        <h1 className="text-2xl text-black mb-5 mt-5">عن الدورة</h1>
        <div className="gradiant" style={{ backgroundImage: "" }}>
          <p className="text-lg text-gray-500">
            Translation is too long to be saved هل أنت جديد في PHP أو تحتاج إلى
            تحديث؟ ثم ستساعدك هذه الدورة في الحصول على جميع أساسيات PHP الإجرائي
            ، و Object Oriented PHP ، و MYSQLi وإنهاء الدورة التدريبية عن طريق
            بناء نظام CMS مشابه لـ WordPress أو Joomla أو Drupal.
          </p>
          <p className="text-lg text-gray-500 mt-5">
            سمحت لي معرفة PHP بجني أموال كافية للبقاء في المنزل وعمل دورات مثل
            هذه للطلاب في جميع أنحاء العالم. كونك مطور PHP يمكن أن يسمح لأي شخص
            بجني أموال جيدة عبر الإنترنت وغير متصل ، وتطوير تطبيقات ديناميكية.
          </p>
          <div style={{ display: readMore.style }}>
            <p className="text-lg text-gray-500 mt-5">
              تتيح لك معرفة PHP إنشاء تطبيقات الويب أو مواقع الويب أو أنظمة
              إدارة المحتوى ، مثل WordPress أو Facebook أو Twitter أو حتى
              Google.
            </p>
            <p className="text-lg text-gray-500 mt-5">
              سمحت لي معرفة PHP بجني أموال كافية للبقاء في المنزل وعمل دورات مثل
              هذه للطلاب في جميع أنحاء العالم. كونك مطور PHP يمكن أن يسمح لأي
              شخص بجني أموال جيدة عبر الإنترنت وغير متصل ، وتطوير تطبيقات
              ديناميكية.
            </p>
          </div>
        </div>
        <p
          className="text-xl text-blue-400 cursor-pointer mt-5"
          onClick={() => {
            if (readMore.style === "none") {
              setReadMore({
                style: "block",
                element: (
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faMinus}
                  ></FontAwesomeIcon>
                ),
              });
            } else {
              setReadMore({
                style: "none",
                element: (
                  <FontAwesomeIcon
                    className="mr-3"
                    icon={faPlus}
                  ></FontAwesomeIcon>
                ),
              });
            }
          }}
        >
          قراءه المزيد
          {readMore.element}
        </p>
        <h1 className="text-2xl text-black mb-5 mt-5">
          ماذا ستتعلم في هذه الدورة ؟
        </h1>
        <div className="flex flex-row justify-between flex-wrap p-5">
          <div className="w-11/12 md:w-5/12">
            <ul className="text-gray-500 list-disc text-lg ">
              <li>فهم حقيقي لكيفية عمل JavaScript خلف الكواليس</li>
              <li>مارس مهاراتك الجديدة مع تحديات البرمجة (الحلول مضمنة)</li>
              <li>احصل على دعم ودود وسريع في دورة الأسئلة والأجوبة</li>
            </ul>
          </div>
          <div className="w-11/12 md:w-5/12">
            <ul className="text-gray-500 list-disc text-lg ">
              <li>فهم حقيقي لكيفية عمل JavaScript خلف الكواليس</li>
              <li>مارس مهاراتك الجديدة مع تحديات البرمجة (الحلول مضمنة)</li>
              <li>احصل على دعم ودود وسريع في دورة الأسئلة والأجوبة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTabs;

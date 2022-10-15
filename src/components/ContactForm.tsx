import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import logo from "../img/logo-white.png";
import NiceButton from "./NiceButton";
import SocialLinks from "./SocialLinks";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        console.log(data);
      })}
      className="w-11/12 md:w-8/12  p-10 md:p-24 rounded-3xl bg-secondary"
    >
      <img width="15%" src={logo} alt="I Human"></img>
      <div className="flex flex-col flex-2 mb-10">
        <h3 className="text-secondary text-3xl">تواصل معنا</h3>
        <div className="">
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
          <div className="flex flex-row flex-wrap items-center pt-5">
            <FontAwesomeIcon
              className="pl-3 text-xl"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <a href="mailto:mostafamabdllah94@gmail.com" className="text-xl">
              الايميل:mostafamabdllah94@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            الاسم الاول
          </label>
          <input
            {...register("firstName", {
              required: " اكمل هذا البيانات",
            })}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="الاسم"
          />
          <p className="mb-0 pt-2 text-red-400">{errors.firstName?.message}</p>
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            اسم العائلة{" "}
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="العائلة"
            {...register("lastName", {
              required: " اكمل هذا البيانات",
            })}
          />
          <p className="mb-0 pt-2 text-red-400">{errors.lastName?.message}</p>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            البريد الالكتروني
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            {...register("email", {
              required: " اكمل هذا البيانات",
            })}
          />
          <p className="mb-0 pt-2 text-red-400">{errors.email?.message}</p>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            الجوال{" "}
          </label>
          <input
            {...register("phone", {
              required: " اكمل هذا البيانات",
              minLength: {
                value: 11,
                message: "Min number is 11",
              },
              maxLength: {
                value: 13,
                message: "Max number is 13",
              },
            })}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
          />
          <p className="mb-0 pt-2 text-red-400">{errors.phone?.message}</p>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          الاستفسار
        </label>
        <textarea
          {...register("info", {})}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="text-white px-10 py-5 mt-5 font-bold rounded-md bg-primary mb-10"
      >
        ارسال
      </button>
      <h1 className="text-center mb-5">مواقع التواصل الاجتماعي</h1>
      <SocialLinks textSized={""} color={""}></SocialLinks>
    </form>
  );
};

export default ContactForm;

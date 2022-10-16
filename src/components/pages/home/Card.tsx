import { faBookmark, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import NiceButton from "../../NiceButton";
interface Iprops {
  head: string;
  body: string;
  color: string;
  category: string;
  icon: IconDefinition;
}

const Card = ({ head, body, color, icon, category }: Iprops) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={`flex-auto  md:flex-1 flex flex-col items-center p-10 pt-16 rounded-lg`}
      style={{ backgroundColor: color }}
    >
      <FontAwesomeIcon
        className="text-7xl text-primary"
        icon={icon}
      ></FontAwesomeIcon>
      <h1 className="text-black font-bold text-3xl mt-3 text-center">{head}</h1>
      <p className="mt-5  w-11/12 text-center text-xl text-secondary font-bold">
        {category}
      </p>
      <p className="mt-5 text-base w-11/12 text-center text-mygray">{body}</p>
    </motion.div>
  );
};

export default Card;

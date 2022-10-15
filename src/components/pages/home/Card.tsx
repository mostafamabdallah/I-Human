import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import NiceButton from "../../NiceButton";
interface Iprops {
  head: string;
  body: string;
  color: string;
}

const Card = ({ head, body, color }: Iprops) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={`flex-auto  md:flex-1 flex flex-col items-center p-10 pt-16 rounded-lg`}
      style={{ backgroundColor: color }}
    >
      <h1 className="text-black font-bold text-3xl mt-3 text-center">{head}</h1>
      <p className="mt-5 text-base w-11/12 text-center text-mygray">{body}</p>
      <NiceButton icon={faBookmark} text="المزيد" link=""></NiceButton>
    </motion.div>
  );
};

export default Card;

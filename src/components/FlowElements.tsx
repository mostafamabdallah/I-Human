import { motion } from "framer-motion";
import React from "react";

interface Iprops {
  dir: string;
  body: string;
  head: string;
}

const FlowElements = ({ dir, head, body }: Iprops) => {
  return (
    <motion.div 
      initial={{ x: 200, opacity: 0 }}
      whileInView={{
        opacity: 1,
        color: "white",
        x: 0,
      }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col p-8  w-full rounded-2xl relative bg-primary"
      style={{ boxShadow: "rgb(128 208 224 / 68%) 0px 0px 24px 0px" }}
    >
      <h3 className="text-inherit text-3xl font-bold ">{head}</h3>
      <p className="text-inherit text-xl mt-3">{body}</p>

      <div
        className={`absolute w-4 h-4 top-1/2 ${dir} bg-primary`}
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
      ></div>
    </motion.div>
  );
};

export default FlowElements;

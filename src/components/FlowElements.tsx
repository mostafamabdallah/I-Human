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
      initial={{ x: 500, opacity:0 }}
      whileInView={{ opacity: 1, backgroundColor: "#0EDC8D", color: "white" ,x:0 }}
      transition={{ duration: 1 ,delay:0.5}}
      viewport={{ once: true }}
      className="flex flex-col p-8 bg-white  w-full rounded-2xl relative"
      style={{ boxShadow: "0px 0px 24px 0px rgb(14 220 141 / 58%)" }}
    >
      <h3 className="text-inherit text-3xl font-bold">
        أنت تقرر حقًا تحسين نفسك
      </h3>
      <p className="text-inherit text-lg">
        ممغنط بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها. ممغنط
        بقوة كافية مجال البيع المسبق لجميع النتائج الأولية لتقديرها.
      </p>

      <div
        className={`absolute w-4 h-4 top-1/2 ${dir} bg-mygreen`}
        style={{ transform: "translateY(-50%) rotate(45deg)" }}
      ></div>
    </motion.div>
  );
};

export default FlowElements;

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Iprops {
  link: string;
  icon: IconDefinition;
  text: string;
}

const NiceButton = ({ link, icon, text }: Iprops) => {
  return (
    <Link
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className="text-white px-10 py-5 mt-5 font-bold rounded-md bg-primary text-center"
      to={`/${link}`}
    >
      {text}
      <FontAwesomeIcon className="pr-3" icon={icon}></FontAwesomeIcon>
    </Link>
  );
};

export default NiceButton;

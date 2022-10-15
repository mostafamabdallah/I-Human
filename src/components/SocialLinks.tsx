import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

interface Iprops {
  textSized: string;
  color: string;
}

const SocialLinks = ({ textSized, color }: Iprops) => {
  return (
    <div
      style={{ color: color }}
      className="flex flex-row flex-wrap justify-center"
    >
      <a href="#" className="text-5xl flex items-center text-inherit">
        <FontAwesomeIcon
          className={`pl-3 ${textSized}`}
          icon={faFacebook}
        ></FontAwesomeIcon>
      </a>
      <a href="#" className="text-5xl flex items-center text-inherit">
        <FontAwesomeIcon
          className={`pl-3 ${textSized}`}
          icon={faInstagram}
        ></FontAwesomeIcon>
      </a>
      <a href="#" className="text-5xl flex items-center text-inherit" >
        <FontAwesomeIcon
          className={`pl-3 ${textSized}`}
          icon={faYoutube}
        ></FontAwesomeIcon>
      </a>
      <a href="#" className="text-5xl flex items-center text-inherit">
        <FontAwesomeIcon
          className={`pl-3 ${textSized}`}
          icon={faTwitter}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default SocialLinks;

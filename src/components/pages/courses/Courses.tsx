import Course from "../../Course";
import DropDown from "../../DropDown";
import image1 from "../../../img/course1-1-1.webp";
import image2 from "../../../img/course3-1.webp";
import image3 from "../../../img/course5-1.webp";
import { useDispatch } from "react-redux";
import { changeStyle } from "../../../redux/navSlice";
import logoBlue from "../../../img/logo-black.png";

const imgs = [image1, image2, image3, image3, image1, image2];

const Courses = () => {
  const dispatch = useDispatch();
  dispatch(
    changeStyle({
      color: "black",
      logo: logoBlue,
    })
  );
  return (
    <section className="min-h-screen pt-32">
      <div className="container flex flex-row flex-wrap min-h-screen ">
        <div className="flex flex-row mb-10">
          <DropDown></DropDown>
        </div>
        <div className="w-full grid-cols-1 md:grid-cols-3 grid gap-8 mb-10">
          {imgs.map((img) => {
            return <Course img={img}></Course>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

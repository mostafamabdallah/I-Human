import React from "react";
import SocialLinks from "./SocialLinks";
interface Person {
  img: string;
  name: string;
  position: string;
  describe: string;
}
const MeetOurTeamItem = ({ data }: any) => {  
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={data.img} className="w-10/12 rounded-full" alt="" />
      <h1 className="text-center text-3xl text-secondary font-bold mt-3">
        {data.name}
      </h1>
      <p className="text-center  text-2xl text-blue-600  mt-3">
        {data.position}
      </p>
      <p className="text-center  text-xl text-gray-500  mt-3">
        {data.describe}
      </p>
      <SocialLinks color="#80D0E0" textSized="text-2xl mt-5"></SocialLinks>
    </div>
  );
};

export default MeetOurTeamItem;

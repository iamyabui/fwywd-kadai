import Image from "next/image";
import SkillGraph from "./SkillGraph";
import Data from "../src/data.json";

export default function Skills() {
  const text = Data.skills.text;
  return (
    <>
      <div 
        id="skills" 
        className="
          flex 
          justify-center 
          items-center 
          mt-20 
          desktop:space-x-4  
          mobile:flex-col
          ">
        <h3 className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
          スキル
        </h3>
        <h3 className="text-lg leading-relaxed text-origin-green tracking-widest">
          SKILLS
        </h3>
      </div>
      <div className="flex justify-center items-center m-auto mt-8 mb-10 mobile:flex-col">
        <div className="flex justify-center items-center mb-8">
          <Image src="/skill.png" alt="skill" width={350} height={250} />
        </div>
        <div className="w-96 desktop:pl-8 mobile:w-72">
          <p className="text-sm text-origin-black tracking-widest">
            {text}
          </p>
          <SkillGraph />
        </div>
      </div>
    </>
  );
}

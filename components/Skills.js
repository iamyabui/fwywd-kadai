import Image from "next/image";
import SkillGraph from "./SkillGraph";

export default function Skills() {
  return (
    <div className="flex justify-center items-center m-auto space-x-7 mt-14 mb-10">
      <div className="flex justify-center items-center">
        <Image src="/skill.png" alt="skill" width={380} height={280} />
      </div>
      <div className="max-w-sm">
        <div className="flex justify-start mt-6 mb-6 space-x-4 items-center">
          <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
            スキル
          </p>
          <p className="text-lg leading-relaxed text-origin-green tracking-widest">
            SKILLS
          </p>
        </div>

        <p className="text-sm text-origin-black">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>

        <SkillGraph />
      </div>
    </div>
  );
}

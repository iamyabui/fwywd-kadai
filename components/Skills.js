import Image from "next/image";
import SkillGraph from "./SkillGraph";

export default function Skills() {
  return (
    <>
      <div id="skills" className="flex justify-center mt-20 desktop:space-x-4 items-center mobile:flex-col">
        <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
          スキル
        </p>
        <p className="text-lg leading-relaxed text-origin-green tracking-widest">
          SKILLS
        </p>
      </div>
      <div className="flex justify-center items-center m-auto mt-8 mb-10 mobile:flex-col">
        <div className="flex justify-center items-center mb-8">
          <Image src="/skill.png" alt="skill" width={350} height={250} />
        </div>
        <div className="w-96 desktop:pl-8 mobile:w-72">
          <p className="text-sm text-origin-black tracking-widest">
            AWSのインフラ構築作業やサポート業務を2年ほど行っていました。昨年夏に、AWSソリューションアーキテクトの資格を取得しました。
            <br></br>
            現在所属している開発部では、PMとしてプロジェクトの予算確保からリリースまでを担当しています。
            <br></br>
            プログラムに関しては、Javascript、React、Next.js、typescriptを学んで独自でアプリケーションを作成しています。
          </p>

          <SkillGraph />
        </div>
      </div>
    </>
  );
}

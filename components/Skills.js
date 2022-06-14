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
          AWSのインフラ構築作業やサポート業務を2年ほど行っていました。昨年夏に、AWSソリューションアーキテクトの資格を取得しました。
          <br></br>
          現在所属している開発部では、PMとしてプロジェクトの予算確保からリリースまでを担当しています。
          <br></br>
          プログラムに関しては、Javascript、React、Next.js、typescriptを学んで独自でアプリケーションを作成しています。
        </p>

        <SkillGraph />
      </div>
    </div>
  );
}

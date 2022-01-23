import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex max-w-5xl mt-6 mb-6 space-x-7">
      <div>
        <Image src="/skill.png" alt="skill" width={400} height={300} />
      </div>
      <div className="max-w-md">
        <div className="flex justify-start mt-6 mb-6 space-x-4">
          <p className="font-bold text-lg leading-relaxed text-gray-600 tracking-widest">
            スキル
          </p>
          <p className="font-bold text-lg leading-relaxed text-green-600 tracking-widest">
            SKILLS
          </p>
        </div>
        <div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  );
}

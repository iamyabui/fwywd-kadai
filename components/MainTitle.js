import Image from "next/image";

export default function maintitle() {
  return (
    <div className="py-10 bg-bg-header">
      <div className="flex justify-between flex-wrap max-w-5xl m-auto">
        <div className="flex pl-16 items-center">
          <div>
            <p className="font-bold text-white text-3xl leading-relaxed tracking-widest">
              メインタイトル
            </p>
            <p className="text-white text-xl leading-relaxed tracking-widest">
              サブタイトル
            </p>
          </div>
        </div>
        <div className="flex pr-10 justify-end items-center">
          <Image src="/hero.png" alt="hero" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

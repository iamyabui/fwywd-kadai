import Image from "next/image";

export default function maintitle() {
  return (
    <div className="py-10 bg-bg-header">
      <div className="flex justify-between flex-wrap max-w-5xl m-auto mobile:flex-col desktop:pl-8 desktop:pr-8">
        <div className="flex items-center mobile:justify-center">
          <div>
            <p className="font-bold text-white text-3xl leading-relaxed tracking-widest">
              My プロフィール
            </p>
            <p className="text-white text-xl leading-relaxed tracking-widest text-center">
              薮井　えりか
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/hero.png" alt="hero" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

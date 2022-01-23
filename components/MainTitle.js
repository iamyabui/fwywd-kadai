import Image from "next/image";

export default function maintitle() {
  return (
    <div className="flex justify-between w-screen h-96 bg-green-400">
      <div className="flex pl-16 items-center">
        <div>
          <p className="font-bold text-white text-xl leading-relaxed tracking-widest">
            メインタイトル
          </p>
          <p className="text-white text-base leading-relaxed tracking-widest">
            サブタイトル
          </p>
        </div>
      </div>
      <div className="flex pr-10 justify-end items-center">
        <Image src="/hero.png" alt="hero" width={300} height={300} />
      </div>
    </div>
  );
}

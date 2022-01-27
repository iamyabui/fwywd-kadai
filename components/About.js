import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex justify-center space-x-4 mt-6 items-center">
        <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
          私について
        </p>
        <p className="text-base leading-relaxed text-origin-green tracking-widest">
          ABOUT
        </p>
      </div>

      <div className="flex justify-center pr-20 pl-20 mt-4 mb-4">
        <div className="w-72 text-center m-auto">
          <div className="mt-3">
            <Image src="/about-1.png" alt="about1" width={150} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed text-origin-green tracking-widest">
            趣味
          </p>
          <p className="m-3 text-sm text-origin-black">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-72 text-center m-auto">
          <div className="m-3">
            <Image src="/about-2.png" alt="about2" width={190} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed text-origin-green tracking-widest">
            好きな食べ物
          </p>
          <p className="m-3 text-sm text-origin-black">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-72 text-center m-auto">
          <div className="m-3">
            <Image src="/about-3.png" alt="about3" width={190} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed text-origin-green tracking-widest">
            性格
          </p>
          <p className="m-3 text-sm text-origin-black">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </>
  );
}

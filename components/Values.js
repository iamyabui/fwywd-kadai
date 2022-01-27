import Image from "next/image";

export default function Values() {
  return (
    <div className="w-screen max-w-5xl pt-14 mb-10">
      <div className="flex justify-center space-x-4 mt-6 items-center">
        <p className="font-bold text-xl leading-relaxed text-gray-600 tracking-widest">
          価値観
        </p>
        <p className="text-base leading-relaxed text-green-600 tracking-widest">
          VALUES
        </p>
      </div>

      <div className="flex justify-center p-5 bg-white rounded mr-20 ml-20 text-origin-black">
        <div className="w-64 text-center m-auto">
          <div className="mt-3">
            <Image src="/value1.png" alt="about1" width={150} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed tracking-widest">
            価値観01
          </p>
          <p className="m-3 text-sm">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-1 bg-border-line"></div>
        <div className="w-64 text-center m-auto">
          <div className="m-3">
            <Image src="/value2.png" alt="about2" width={150} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed tracking-widest">
            価値観02
          </p>
          <p className="m-3 text-sm">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-1 bg-border-line"></div>
        <div className="w-64 text-center m-auto">
          <div className="m-3">
            <Image src="/value3.png" alt="about3" width={150} height={150} />
          </div>
          <p className="mt-3 font-bold text-base leading-relaxed tracking-widest">
            価値観03
          </p>
          <p className="m-3 text-sm">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  );
}

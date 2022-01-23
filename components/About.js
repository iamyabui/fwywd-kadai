import Image from "next/image";

export default function About() {
  return (
    <div className="bg-bg-about max-w-5xl">
      <div className="block text-center space-x-4 mt-6 mb-6">
        <p className="font-bold text-lg leading-relaxed text-gray-600 tracking-widest">
          私について
        </p>
        <p className="font-bold text-lg leading-relaxed text-green-600 tracking-widest">
          ABOUT
        </p>
      </div>

      <div className="flex space-x-6">
        <div className="w-72 text-center mt-6 mb-6">
          <div className="mt-3">
            <Image src="/about-1.png" alt="about1" width={150} height={150} />
          </div>
          <p className="mt-3 font-bold text-lg leading-relaxed text-gray-600 tracking-widest">
            趣味
          </p>
          <p className="mt-3">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-72 text-center mt-6 mb-6">
          <div className="mt-3">
            <Image src="/about-2.png" alt="about2" width={190} height={150} />
          </div>
          <p className="mt-3 font-bold text-lg leading-relaxed text-gray-600 tracking-widest">
            好きな食べ物
          </p>
          <p className="mt-3">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="w-72 text-center mt-6 mb-6">
          <div className="mt-3">
            <Image src="/about-3.png" alt="about3" width={190} height={150} />
          </div>
          <p className="mt-3 font-bold text-lg leading-relaxed text-gray-600 tracking-widest">
            性格
          </p>
          <p className="mt-3">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  );
}

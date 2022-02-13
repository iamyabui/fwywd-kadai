import Image from "next/image";

export default function Future() {
  return (
    <div className="flex w-screen max-w-5xl m-auto space-x-7 px-20 py-8">
      <div className="max-w-md">
        <div className="flex space-x-4 items-center">
          <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
            3年後にやりたいこと
          </p>
          <p className="text-base leading-relaxed text-origin-green tracking-widest">
            FUTURE
          </p>
        </div>
        <p className="mt-3 text-sm text-origin-black">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div>
        <Image src="/future.png" alt="future" width={400} height={200} />
      </div>
    </div>
  );
}

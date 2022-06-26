import Image from "next/image";

export default function Future() {
  return (
    <div id="future" className="flex w-screen max-w-4xl min-w-[365px] m-auto desktop:justify-between pt-8 mobile:flex-col">
      <div className="max-w-md my-auto mobile:mx-auto mb-5">
        <div className="flex desktop:space-x-4 items-center mobile:flex-col">
          <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
            3年後にやりたいこと
          </p>
          <p className="text-base leading-relaxed text-origin-green tracking-widest">
            FUTURE
          </p>
        </div>
        <p className="mt-3 px-5 text-sm text-origin-black">
          社会において人々が抱えている悩みや課題を解決するアプリを、自分で企画して作成できるようになりたいです。そのためには、日々様々な情報を積極的にインプットして、社会が抱えている問題や悩みに対してどのようにしたらITで解決できるか常に考えられるエンジニアになりたいです。
        </p>
      </div>
      <div className="mobile:mx-auto">
        <Image src="/future.png" alt="future" width={400} height={200} />
      </div>
    </div>
  );
}

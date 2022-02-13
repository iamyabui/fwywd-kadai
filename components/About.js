import Image from "next/image";
import Data from "../src/data.json";

export default function About() {
  const items = Data.about;

  return (
    <>
      <div className="flex justify-center space-x-4 pt-6 items-center">
        <p className="font-bold text-xl leading-relaxed text-origin-black tracking-widest">
          私について
        </p>
        <p className="text-base leading-relaxed text-origin-green tracking-widest">
          ABOUT
        </p>
      </div>

      <div className="max-w-5xl m-auto flex justify-center px-20 py-4">
        {items.map((data, index) => (
          <div key={index} className="w-72 text-center m-auto">
            <div className="mt-3">
              <Image
                src={data.src}
                alt="about1"
                width={data.width}
                height={data.height}
              />
            </div>
            <p className="mt-3 font-bold text-base leading-relaxed text-origin-green tracking-widest">
              {data.category}
            </p>
            <p className="m-3 text-sm text-origin-black">{data.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

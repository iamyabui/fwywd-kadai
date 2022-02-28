import Image from "next/image";
import Data from "../src/data.json";

export default function Values() {
  const items = Data.value;

  return (
    <div className="pt-14 pb-10">
      <div className="flex justify-center space-x-4 mt-6 items-center">
        <p className="font-bold text-xl leading-relaxed text-gray-600 tracking-widest">
          価値観
        </p>
        <p className="text-base leading-relaxed text-green-600 tracking-widest">
          VALUES
        </p>
      </div>

      <div className="max-w-5xl m-auto flex justify-center px-20 p-5 bg-white rounded text-origin-black">
        {items.map((data, index) => (
          <div key={index} className="flex">
            <div className="w-64 mx-auto">
              <div className="mt-3 text-center">
                <Image src={data.src} alt={data.alt} width={150} height={150} />
              </div>
              <p className="mt-3 text-center font-bold text-base leading-relaxed tracking-widest">
                {data.value}
              </p>
              <p className="m-3 text-sm h-34">{data.text}</p>
            </div>
            {index !== 2 && <div className="w-1 bg-border-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

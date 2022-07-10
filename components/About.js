import Image from 'next/image'
import Data from '../src/data.json'

export default function About() {
  const items = Data.about

  return (
    <>
      <div
        id='about'
        className='flex justify-center pt-6 items-center mobile:flex-col desktop:space-x-4'
      >
        <h3 className='font-bold text-xl leading-relaxed text-origin-black tracking-widest'>
          私について
        </h3>
        <h3 className='text-base leading-relaxed text-origin-green tracking-widest'>ABOUT</h3>
      </div>

      <div className='max-w-4xl mx-auto flex justify-center py-4 mobile:flex-col'>
        {items.map((data, index) => (
          <div key={index} className='w-72 mx-auto'>
            <div className='mt-3 text-center'>
              <Image src={data.src} alt='about1' width={data.width} height={data.height} />
            </div>
            <h4 className='mt-3 text-center font-bold text-base leading-relaxed text-origin-green tracking-widest'>
              {data.category}
            </h4>
            <p className='m-3 text-sm text-origin-black h-34'>{data.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

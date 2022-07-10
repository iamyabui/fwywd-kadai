import Image from 'next/image'
import Data from '../src/data.json'

export default function Values() {
  const items = Data.value

  return (
    <div className='pt-14 pb-10'>
      <div
        id='values'
        className='
          flex 
          justify-center 
          items-center 
          mt-6 
          desktop:space-x-4 
          mobile:flex-col
      '
      >
        <h3 className='font-bold text-xl leading-relaxed text-gray-600 tracking-widest'>価値観</h3>
        <h3 className='text-base leading-relaxed text-green-600 tracking-widest'>VALUES</h3>
      </div>

      <div
        className='
          max-w-4xl 
          m-auto flex 
          justify-center 
          pb-5 
          pt-5 
          bg-white 
          rounded 
          text-origin-black 
          mobile:flex-col 
          mobile:w-[20rem]
        '
      >
        {items.map((data, index) => (
          <div key={index} className='flex'>
            <div className='desktop:w-64 mx-auto'>
              <div className='mt-3 text-center'>
                <Image src={data.src} alt={data.alt} width={150} height={150} />
              </div>
              <h4 className='mt-3 text-center font-bold text-base leading-relaxed tracking-widest'>
                {data.value}
              </h4>
              <p className='m-3 text-sm h-34'>{data.text}</p>
            </div>
            {index !== 2 && <div className='desktop:w-1 bg-border-line'></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

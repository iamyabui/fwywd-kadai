import Image from 'next/image'
import Data from '../src/data.json'

export default function Future() {
  const text = Data.future.text

  return (
    <div
      id='future'
      className='
        flex w-screen 
        max-w-4xl 
        min-w-[365px] 
        m-auto 
        pt-8 
        desktop:justify-between 
        mobile:flex-col'
    >
      <div className='max-w-md my-auto mobile:mx-auto mb-5'>
        <div className='flex desktop:space-x-4 items-center mobile:flex-col'>
          <h3 className='font-bold text-xl leading-relaxed text-origin-black tracking-widest'>
            3年後にやりたいこと
          </h3>
          <h3 className='text-base leading-relaxed text-origin-green tracking-widest'>FUTURE</h3>
        </div>
        <p className='mt-3 px-5 text-sm text-origin-black'>{text}</p>
      </div>
      <div className='mobile:mx-auto'>
        <Image src='/future.png' alt='future' width={400} height={200} />
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function MainTitle() {
  return (
    <div className='py-10 bg-bg-header'>
      <div
        className='
        flex 
        justify-between 
        flex-wrap 
        max-w-5xl 
        m-auto 
        mobile:flex-col 
        desktop:pl-8 
        desktop:pr-8
      '
      >
        <div className='flex items-center mobile:justify-center'>
          <div>
            <h1 className='font-bold text-white text-3xl leading-relaxed tracking-widest'>
              My プロフィール
            </h1>
            <h2 className='text-white text-xl leading-relaxed tracking-widest text-center'>
              薮井　えりか
            </h2>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image src='/hero.png' alt='hero' width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-bg-footer text-white'>
      <div className='max-w-5xl m-auto '>
        <div className='flex justify-center pt-10 pb-10 space-x-3'>
          <p>CREATED BY</p>
          <p>薮井えりか</p>
        </div>
        <div className='flex justify-center'>
          <Image src='/logo_white.png' alt='logo_white' width={80} height={100} />
        </div>
        <div className='flex justify-center pt-10 pb-5 space-x-3'>
          <div>
            <Image src='/twitter.png' alt='twitter' width={20} height={18} />
          </div>
          <div>
            <Image src='/facebook.png' alt='facebook' width={20} height={18} />
          </div>
        </div>
        <p className='flex justify-center pb-5'>@ 2021 KIKAGAKU</p>
      </div>
    </footer>
  )
}

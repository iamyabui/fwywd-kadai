import About from './About'
import Future from './Future'
import Skills from './Skills'
import Values from './Values'

export default function Main() {
  return (
    <main>
      <div
        className='
        bg-no-repeat 
        desktop:bg-img 
        desktop:bg-position 
        desktop:bg-size 
        bg-background:
        mobile:bg-img-mobile
        mobile:bg-position-mobile 
        mobile:bg-size-mobile
        '
      >
        <About />
        <Skills />
        <Values />
        <Future />
      </div>
    </main>
  )
}

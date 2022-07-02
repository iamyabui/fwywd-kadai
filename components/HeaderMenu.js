import Image from "next/image";

export default function HeaderMenu() {
    return (
    <nav 
    className="
    flex  
    max-w-5xl 
    m-auto 
    desktop:justify-between 
    mobile:flex-col 
    mobile:text-center
    ">
    <div className="block items-center desktop:pl-8">
        <Image src="/logo.png" alt="fwywd Logo" width={160} height={70} />
    </div>
    <div 
    className="
        flex 
        justify-end 
        items-center 
        text-origin-green
        mobile:m-auto 
        desktop:pr-8 
    ">
        <div className="flex pr-2 pl-2"><a href="#about">ABOUT</a></div>
        <div className="flex pr-2 pl-2"><a href="#skills">SKILLS</a></div>
        <div className="flex pr-2 pl-2"><a href="#values">VALUES</a></div>
        <div className="flex pr-2 pl-2"><a href="#future">FUTURE</a></div>
    </div>
    </nav>
    )
}

const Hero = () => {
    return (
        <header>
            <nav className="flex justify-between p-8 bg-slate-200">
                <span className="text-[25px]">Monica Edem Kokovena</span>
                <div className="flex gap-x-[1rem] text-[20px]">
                    <span>Resume <span className="font-bold">|</span></span>
                    <span>Portfolio<span className="font-bold">|</span></span>
                    <span>Contact</span>

                </div>
            </nav>

            {/* HERO PAGE BEGINS HERE */}
            <section>
                <div className="flex justify-center items-center gap-x-5 p-[8rem]">
                    <img src="" alt="user image" className="h-[25rem] w-[25rem] rounded-full border-r-2 bg-slate-600" />
                    <div className="flex flex-col justify-center w-[50%]">
                        <span className="text-[5rem] antialiased">hello</span>
                        <span className="text-[22px] font-medium antialiased">About me</span>
                        <span className="text-[20px] antialiased">i am a frontend developer who is interested in blah blah blah blahhh blahhi am a frontend developer who is interested in blah blah blah blahhh blahhi am a frontend developer who is interested in blah blah blah blahhh blahhi am a frontend developer who is 
                        </span>

                        <div className="flex gap-y-10 gap-x-5 p-10 text-[20px]">
                        <div className="size-[8rem] rounded-full bg-portBlue border-r-4 flex justify-center items-center hover:bg-white">Resume</div>
                        <div className="size-[8rem] rounded-full bg-gray-300 border-r-4 flex justify-center items-center hover:bg-white">Projects</div>
                        <div className="size-[8rem] rounded-full bg-black border-r-4 flex justify-center items-center text-white hover:bg-white hover:text-black" >Contact</div>
                    </div>

                    </div>

                </div>
                

            </section>

        </header>
    )
}

export default Hero
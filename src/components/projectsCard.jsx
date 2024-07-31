import React from 'react'
import Project1 from "../assets/images/Euphoria.png"

const ProjectsCard = () => {
    return (
        <div className=" flex flex-col justify-center gap-y-5">

            <div className=" flex gap-x-10">
                <div className="w-1/2 flex flex-col gap-y-2">
                    <span className='text-[20px] font-semibold'>Project Name 01
                    </span>
                    <p>

                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.

                       
                    </p>
                    <span> link goes here</span>

                </div>

                <div className="flex flex-col  w-1/2 ">
                    <img src={Project1} alt="project image"  className='w-[90%] h-[40vh] '/>
                   

            </div>



        </div>




        </div >
    )
}

export default ProjectsCard
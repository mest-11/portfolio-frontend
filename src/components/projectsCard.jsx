import React from 'react'
import Project1 from "../assets/images/ExpertCare.mp4"

const ProjectsCard = () => {
    return (
        <div className=" flex flex-col justify-center gap-y-10">

            <div className=" flex gap-x-10">
                <div className="w-1/2 flex flex-col gap-y-2">
                    <span className='text-[20px] font-semibold'>Project Name 01
                    </span>
                    <p>

                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.

                       
                    </p>
                    <span> link goes here</span>

                </div>

                <div className="flex flex-col  w-1/2 pb-20">
                    <video className='w-[30rem]' controls>
                        <source src={Project1} type="video/mp4">

                           
                            </source>
                    </video>
                   

            </div>



        </div>




        </div >
    )
}

export default ProjectsCard
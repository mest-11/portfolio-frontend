import React from 'react'

const AddBio = () => {
    return (

        <div className=" ">

            <form action="" className="">
                <div className=''>
                    <div>
                        <label htmlFor='Profile Picture'>Upload Image</label>
                        <input type='file' id=''  className='' placeholder=''/>
                    </div>


                    <div>
                        <label htmlFor="Gender">Gender</label>
                        <select className='' placeholder="" />
                        <option></option>
                        <option>Female</option>
                        <option>Male</option>
                    </div>

                    <div>
                        <label htmlFor="Bio">Bio</label>
                        <input type="text" className="" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor='Contact'>Contact</label>
                        <input type='text' className='' />
                    </div>

                    <div>
                        <label htmlFor="About">About</label>
                        <input type="text" className="" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor="DateofBirth">Date Of Birth</label>
                        <input type="date" className="" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor='Language'>Languages</label>
                        <select className='' placeholder="" />
                        <option></option>
                        <option>English</option>
                        <option>French</option>
                        <option>Spanish</option>
                        <option>Italian</option>
                        <option>Chinese</option>
                        <option>Twi</option>
                        <option>Ga</option>
                        <option>Dagbani</option>
                        <option>Hausa</option>
                        <option>Yoruba</option>
                        <option>Bono</option>
                    </div>

                    <div>
                        <button className=""><span className="truncate">Sunbmit</span>
                        </button>
                    </div>

                </div>
            </form>
        </div>




    )
}

export default AddBio
import React from 'react'

const AddBio = () => {
    return (
        <form action="">
            <div className="border-blue-400 shadow-lg ">


                <div>
                    <label htmlFor='Profile Picture'>Upload Image</label>
                    <input type='file' id='' />
                </div>

                <div>

                    <label htmlFor="location">Location</label>
                    <select className='' placeholder="" />
                    <option></option>
                    <option>Ghana</option>
                    <option>Nigeria</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>India</option>
                    <option>Norway</option>
                    <option>Germany</option>

                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <select className='' placeholder="" />
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
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



    )
}

export default AddBio
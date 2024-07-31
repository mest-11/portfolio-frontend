import Project1 from '../assets/images/myImg2.jpeg'
const AchieveCard = () => {
    return (
        <div>
            <div>
                <div className=" flex flex-col gap-x-10 gap-y-3 flex-wrap p-5">
                    <span className="w-[300px] font-medium">2035 - Present</span>
                    <img src={Project1} alt="cert img" className="w-[15rem] h-[10rem] rounded-[5px]" />
                    <span className='font-medium'>Organization</span>
                    <p className='w-[15rem]'> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default AchieveCard
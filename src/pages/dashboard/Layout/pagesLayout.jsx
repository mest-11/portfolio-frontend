import { PlusCircleIcon } from 'lucide-react'
import React from 'react'

const PagesLayout = ({ headerText, buttonText, children }) => {
    return (
        <div className="p-10 flex flex-col gap-y-16">
            <div className="flex">
                <h1 className='text-3xl font-bold'>{headerText}</h1>
                <button className='bg-portBlue text-white px-5 py-2 ml-auto rounded-lg' onClick={onclick}>
                    <PlusCircleIcon/>
                    {buttonText}
                </button>
            </div>
            <div>{children}</div>

        </div>
    )
}

export default PagesLayout
import React from 'react'
import Skills from './skills'
import Education from './education'
import Experience from './experience1'
import SubNavBar from '../../components/subNavBar'
import SubFooter from '../../components/subFooter'
import Achieve from './achieve'

const Resume = () => {
  return (
    <div className='bg-[#F3F3F3]'>
      <SubNavBar/>
      <div>
        <Skills/>
        <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
        <Experience/>
        <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
        <Education/>
        <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
        <Achieve/>
    </div>
    <SubFooter/>

    </div>
    
  )
}

export default Resume

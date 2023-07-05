import React from 'react'
import ProjectsItem from './ProjectsItem'
import salonImg from '../assets/Salon.png'
import cafeImg from '../assets/Cafe.png'

const Projects = () => {
  return (
    <div id='projects' className='max-x-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde perspiciatis possimus vero. Non a enim blanditiis dolorem libero et voluptas reiciendis qui ipsa reprehenderit? Voluptas recusandae ea odio fugiat?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectsItem img={salonImg} title='Salon Management System'/>
            <ProjectsItem img={cafeImg} title='CIIT Cafe App'/>
        </div>
    </div>

  )
}

export default Projects
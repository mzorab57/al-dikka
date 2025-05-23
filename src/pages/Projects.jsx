import React from 'react'
import PagesHeader from '../components/ui/PagesHeader'
import ProjectsPage from '../components/projectPage/ProjectsPage'

const Projects = () => {
  return (
    <div className='container mx-auto max-w-full'>
      <PagesHeader img={'/assets/images/bgHome/bg3.jpg'} title={'projects'} />
      <ProjectsPage />
    </div>
  )
}

export default Projects

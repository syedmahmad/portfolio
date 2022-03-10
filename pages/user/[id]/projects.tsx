import { useEffect, useState } from 'react'
import ProjectCard from '../../../components/ProjectCard'
import ProjectsNavbar from '../../../components/ProjectsNavbar'
import { projects as projectsData } from '../../../data'
import { Category } from '../../../types'
import {getPageData} from '../../api/getData'

const Projects = (props: any) => {
  const [projects, setProjects] = useState(props.projects || [])
  const [active, setActive] = useState('all')

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(props.projects)
      setActive(category)
      return
    }

    const newArray = props.projects.filter((project) =>
      project.category.includes(category),
    )
    setProjects(newArray)
    setActive(category)
  }

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

     {props.projects !== null && 
     <div className="relative grid grid-cols-12 gap-4 my-3">
     {projects.map((project) => (
       <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
         <ProjectCard project={project} key={project.id} />
       </div>
     ))}
   </div>
     } 
    </div>
  )
}

export default Projects

export async function getServerSideProps() {
  let ProjectsData = await getPageData("/api/projects?populate[projects][populate]=*");  
  return {
      props: {
        projects:  ProjectsData?.data[0]?.attributes?.projects || null,
      }
  }
}
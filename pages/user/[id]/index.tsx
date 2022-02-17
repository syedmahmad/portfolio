import React from 'react'
import { NextPage } from 'next'
import ServiceCard from '../../../components/ServiceCard'
import { services } from '../../../data'

const Index: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I have done my Bacholer's in Computer Science from University of
        Management and Technology, Lahore (UMT). I have 2+ years of experience
        in Web Development specially front-end frameworks like Next.js,
        React.js, Vue.js, Nuxt.js. Also worked on different UI Frameworks like
        Chakra-UI, Material-UI.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index

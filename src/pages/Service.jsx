import React from 'react'
import OurServices from '../components/ourServices/OurServices'
import PagesHeader from '../components/ui/PagesHeader'
import CoreValues from '../components/coreValues/CoreValues'

const Service = () => {
  return (
    <div className=" mx-auto ">
        <PagesHeader img={'/assets/images/services/serviceBg.jpg'} title={'Services'} />
      <OurServices />
       
    </div>
  )
}

export default Service

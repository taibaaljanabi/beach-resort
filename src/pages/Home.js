import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/services'

export default function Home() {
  return (
  <>
    <Hero hero ='defaultHero'>
        <Banner title="الغرف الفاخرة" subtitle='غرف الديلوكس تبدا من ٥٠ دولار'>
              <Link to ='/rooms' className='btn-primary'>
              الغرف
            </Link>
      </Banner>
    </Hero>
    <Services/>
</>

  )
}



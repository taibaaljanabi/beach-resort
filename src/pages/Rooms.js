import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Rooms() {
  return (
    <Hero hero ='roomsHero'>
      <Banner 
      title="الغرف الفاخره" subtitle='الغرف اللديلوكس تبدا من ٢٩٩ دولار'>
          <Link to ='/rooms' className='btn-primary'>
      عودة للرئيسية
          </Link>
      </Banner>
    
    </Hero>
    
  );
}

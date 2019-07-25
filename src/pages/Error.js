import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <Hero >
      <Banner title='404' subtitle='الصفحة غير موجودة'>
      <Link to='/' className='btn-primary'>
      عودة للرئيسية
      </Link>
      </Banner>
      </Hero>
  );
}

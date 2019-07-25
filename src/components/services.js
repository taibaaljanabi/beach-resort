import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class services extends Component {

  state={
    services: [
      {
        icon:<FaCocktail/>,
        title: 'كوكتيلات مجانية',
        info:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت سيت دو أيوسمود تيمبو'
      },
      {
        icon:<FaHiking/>,
        title: 'نزهات لا حدود لها',
        info:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت سيت دو أيوسمود تيمبو'
        

      },
      {
        icon:<FaShuttleVan/>,
        title: "مواصلات مجانية",
        info:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت سيت دو أيوسمود تيمبو'
        

      },
      {
        icon:<FaBeer/>,
        title: "بيرة مجانية",
        info:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت سيت دو أيوسمود تيمبو'
        

      }
      


    ]
  }
  render() {
    return (
      <section className='services'>
      <Title title='الخدمات'/>
      <div className='services-center'>
      {this.state.services.map((item ,index)=>{
        return <article key={index}
className="service">
<span>{item.icon}</span>
<h6>{item.title}</h6>
<p>{item.info}</p>

</article>

      })}

      </div>

        </section>

)
}
}



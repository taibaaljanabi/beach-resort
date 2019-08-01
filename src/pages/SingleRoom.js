import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
 constructor (props){
   super(props)
      console.log(props)
      this.state = {
        slug: this.props.match.params.slug,
        defaultBcg
      }
 }
 static contextType = RoomContext

//  componentDidMount(){
   
//  }


  render() {
    const {getRoom} = this.context
    const room = getRoom(this.state.slug)
    if(!room){
      return <div className='error'>
      <h3>ليس هنالك غرفة بهذا الاسم </h3>
      <Link to ='/rooms' className='btn-primary'> العودة الى الغرف</Link>
      </div>
    }
    const {name, 
      description, 
      capacity, 
      size, 
      price, 
      extras, 
      breakfast, 
      pets,
      images}= room
      
      const [mainImg,...defaultImg] = images
      console.log(defaultImg) 


   
    return (
      <>
     <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title = {`${name}`}>
                  <Link to = '/rooms' className = 'btn-primary'>
                  العودة الى الغرف
                  </Link>
          </Banner>
     </StyledHero>
     <section className= 'single-room'>
     <div className = 'single-room-images'>
     {defaultImg.map((item, index) => {
       return <img key= {index} src= {item} alt={name} /> 

     })}
     
     </div>
     <div className = 'single-room-info'>
     <article className= 'desc'>
     <h3>التفاصيل</h3>
     <p>{description}</p>
     
     </article>



     </div>
    
     </section>

     </>
    );
  }
}


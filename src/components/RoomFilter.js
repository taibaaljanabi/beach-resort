import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'
//get all unique values 

const getUnique = (items, value) =>{
  return [... new Set(items.map(item => item[value]))]
}



export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext)
   const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize ,
    breakfast,
     pets
   } = context
   //get unique types
   let types = getUnique(rooms,'type')
   
   types = ['all',...types]

   types = types.map((item, index )=>{
     return <option value = {item} key ={index} >{item}</option>
   })
   let people = getUnique(rooms, 'capacity')
   people = people.map((item, index) =>{
     return <option key ={index} value = {item} >{item}</option>  })

  return <section className = 'filter-container'>
  <Title title = "ابحث"/>
  <form className= 'filter-form'>
  {/*select type */}
  <div className= 'form-group'>
  <label htmlFor = 'type'>نوع الغرفة</label>
  <select name= 'type' 
  id = 'type'
   value = {type} 
   className = 'form-control' 
   onChange = {handleChange}>
  {types}

  </select>
  </div>
  {/* end select type */}
  {/* guests*/ }
  <div className= 'form-group'>
  <label htmlFor = 'capacity'>الضيوف</label>
  <select name= 'capacity' 
  id = 'capacity'
   value = {capacity} 
   className = 'form-control' 
   onChange = {handleChange}>
  {people}

  </select>
  </div>
   {/* end guests*/}
    {/*room price */}
  <div className="form-group">
  <label htmlFor='price'>سعر الغرفة ${price} </label>
  <input type = 'range' name = 'price' min = {minPrice} max = {maxPrice} id = 'price' value = {price} onChange={handleChange} className = 'form-control'/>
  
  </div>

    {/* end of room price */}
     {/*  room size */}
     <div className='form-group'>
     <label htmlFor='size'>حجم الغرفة</label>
     <div className= 'size-inputs'>
     <input
      type = 'number' 
      name='minSize' 
      id='size' 
      value= {minSize} 
      onChange = {handleChange}
     className='size-input'
     />
     <input
      type = 'number' 
      name='maxSize' 
      id='size' 
      value= {maxSize} 
      onChange = {handleChange}
     className='size-input'
     />

     </div>
     </div>
      {/* end of room size */}
       {/* extras */}
       <div className='form-group'>
       <div className='single-extra'>
       <input type ='checkbox' name='breakfast' id = 'breakfast' checked = {breakfast}
       onChange = {handleChange}/>
       <lable 
       htmlFor ='breakfast'>الفطور</lable>
       </div>

       <div className='single-extra'>
       <input type ='checkbox' name='pets' id = 'pets' checked = {pets}
       onChange = {handleChange}/>
       <lable 
       htmlFor ='pets'>الحيوانات الاليفة</lable>

       </div>
      
       
       
       </div>
       {/* end of extras */}



  </form>
  </section>
  
}

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
     pets
   } = context
   //get unique types
   let types = getUnique(rooms,'type')
   
   types = ['all',...types]

   types = types.map((item, index )=>{
     return <option value = {item} key ={index} >{item}</option>
   })

  return <section className = 'filter-container'>
  <Title title = 'ابحث عن الغرف'/>
  <form className= 'filter-form'>
  {/*select type */}
  <div className= 'form-group'>
  <label htmlFor = 'type'>نوع الغرفة</label>
  <select name= 'type' id = 'type' value = {type} className = 'form-control' onChange = {handleChange}>
  {types}

  </select>
  </div>
  {/* end select type */}
  </form>
  </section>
  
}

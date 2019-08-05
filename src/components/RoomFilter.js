import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'



export default function RoomFilter() {
  const context = useContext(RoomContext)
  console.log(context)
  return <div>Hello from the room filter</div>
  
}

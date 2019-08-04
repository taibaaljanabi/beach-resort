// import React from 'react';
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// import Loading from './Loading'
// import {RoomConsumer} from '../Context'
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const {loading, sortedRooms, rooms} = value
//           if (loading) {
//              return <Loading/>
//           }
//           return (
//           <div>
//           Helo from rooms Container
//           <RoomsFilter rooms= {rooms}/>
//           <RoomsList rooms = {sortedRooms}/>
//           </div>
//           )
//         }
//       }
//     </RoomConsumer>

//   );
// }


import React from 'react';
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import Loading from './Loading'
import {withRoomConsumer} from '../Context'

function RoomsContainer({context}){
  const {loading, sortedRooms, rooms} = context
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <RoomsFilter rooms = {rooms}/>
      <RoomsList  rooms = {sortedRooms}/>
    </>
  )
}

export default withRoomConsumer(RoomsContainer)
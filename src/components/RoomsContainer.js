import React from 'react';
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
// import {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomsContainer() {
  return (
    <div>
      Helo from rooms Container
      <RoomsFilter/>
      <RoomsList/>
    </div>
  );
}

import React from 'react';
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import Loading from './Loading'
import {RoomConsumer} from '../Context'
export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {
        (value) => {
          console.log(value)
          return (
          <div>
          Helo from rooms Container
          <RoomsFilter/>
          <RoomsList/>
          </div>
          )
        }
      }
    </RoomConsumer>

  );
}

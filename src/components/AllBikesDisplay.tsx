import React, {useState, useEffect} from 'react'
import SingleBikeDisplay from './SingleBikeDisplay'


const AllBikesDisplay: React.FC =()=>{
    const [motorcycles, setMotorcycles] = useState([
        {
          make: 'Yamaha',
          model: 'Tracer 900',
          color: 'gray',
          miles: 7851,
          year: 2018,
          id: 1
        },
        {
            make: 'Yamaha',
            model: 'FZ 07',
            color: 'red',
            miles: 8054,
            year: 2015,
            id: 2
          }
      ])

    console.log('hello there',)
    return (
        <div>
        <h1>All Motorcycles</h1>
        {motorcycles.map(e => {
          console.log('wut')
          return <SingleBikeDisplay make={e.make} model={e.model} color={e.color} miles={e.miles} year={e.year} id={e.id} key={e.id}/>
        })}
        </div>
    )
}

export default AllBikesDisplay
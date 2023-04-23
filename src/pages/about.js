import {useState} from 'react';
import useNetwork from '@/data/network';

export default function About() {
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  let count
  // let availableStations = network.stations.map(station)
  console.log(network)
  return (
    <div>
      <h1>About {network.name}</h1>
      {/* <p>Available stations: {availableStations} </p> */}

    </div>
  )
}

import useNetwork from '@/data/network'
import Link from 'next/link'
import '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
    const [filter, setFilter] = useState('')
    const { network, isLoading, isError } = useNetwork()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    return (
        <div className='list'>
            <input type="text" value={filter} onChange={handleFilterChange} />
            {stations.slice(0,5).map(station => 
          <div key={station.id}>
                <Link href={`/stations/${station.id}`}>{station.name}</Link>
          </div>)}        
        </div>
    )
}
 
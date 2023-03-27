import useNetwork from '@/data/network'
import Link from 'next/link'
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
        <div>
            <input type="text" value={filter} onChange={handleFilterChange} />
            {stations.map(station => <Link href={`/stations/${station.id}`} key={station.id}>{station.name}</Link>)}
        </div>
    )
}

import useNetwork from '@/data/network'
import Link from 'next/link'

export default function Home() {
    const { network, isLoading, isError } = useNetwork()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    const stations = network.stations
    return (
        <div>
            {stations.map(station => <Link href={`/stations/${station.id}`} key={station.id}>{station.name}</Link>)}
        </div>
    )
}

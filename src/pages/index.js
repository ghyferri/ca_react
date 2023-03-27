import useNetwork from '@/data/network'


export default function Home() {
    const { network, isLoading, isError } = useNetwork()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    const stations = network.stations
    return (
        <div>
            {stations.map(station => <p key={station.id}>{station.name}</p>)}
        </div>
    )
}

import useNetwork from "@/data/network";
import { useRouter } from "next/router";
import StationImage from "@/components/StationImage";

export default function Home() {
  const { network, isLoading, isError } = useNetwork();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const station = network.stations.find(
    (station) => station.id === router.query.stationId
  );
  console.log(station);
  return (
    <div>
      <h1>{station.name}</h1>
      <p>adres: {station.extra.address}</p>
      <p>free bikes: {station.free_bikes}</p>
      <p>empty slots: {station.empty_slots}</p>
      <p>latitude: {station.latitude}</p>
      <p>longitude: {station.longitude}</p>

      <StationImage station={station} />
    </div>
  );
}

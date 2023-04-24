import useNetwork from "@/data/network";
import Link from "next/link";
import "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { getDistance } from "@/utils/getDistance";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState({});
  const { network, isLoading, isError } = useNetwork();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const stations = network.stations.filter(
    (station) => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
  );

  // map stations to add disrance to current location
  stations.map((station) => {
    station.distance =
      getDistance(
        location.latitude,
        location.longitude,
        station.latitude,
        station.longitude
      ).distance / 1000;
  });

  // sort stations by distance
  stations.sort((a, b) => a.distance - b.distance);
  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="list">
      <input type="text" value={filter} onChange={handleFilterChange} />
      {stations.slice(0, 10).map((station) => (
        <div key={station.id}>
          <Link href={`/stations/${station.id}`}>
            {station.name}:{" "}
            {getDistance(
              location.latitude,
              location.longitude,
              station.latitude,
              station.longitude
            ).distance / 1000}
            km
          </Link>
        </div>
      ))}
    </div>
  );
}

import useNetwork from '@/data/network';
import { useRouter } from 'next/router';
import StationImage from '@/components/StationImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Heading from '@/components/Heading';
import Link from 'next/link';

export default function Home() {
  const { network, isLoading, isError } = useNetwork();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const station = network.stations.find(
    (station) => station.id === router.query.stationId,
  );
  function correctName() {
    return station.name.split('-').join(' ');
  }

  return (
    <div>
      <Heading text={correctName()} />
      <StationImage className="imageuh" station={station} />
      <div className="body">
        <Link className="back" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>

        <p>adres: {station.extra.address}</p>
        <p>free bikes: {station.free_bikes}</p>
        <p>empty slots: {station.empty_slots}</p>
        <p>latitude: {station.latitude}</p>
        <p>longitude: {station.longitude}</p>
      </div>{' '}
    </div>
  );
}

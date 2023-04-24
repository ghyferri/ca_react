import { getDistance } from '@/utils/getDistance';
import StationImage from '@/components/StationImage';
import Link from 'next/link';

export default function Card(props) {
  const station = props.station;
  const location = props.location;
  const distance =
    getDistance(
      location.latitude,
      location.longitude,
      station.latitude,
      station.longitude,
    ).distance / 1000;
  console.log(station);

  function correctName() {
    return station.name.split('-').join(' ');
  }

  return (
    <div className="card">
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <StationImage className="stationImage" station={station} />
            </figure>
            <div className="article-body">
              <h2>{correctName()}</h2>
              <p className="address">{station.extra.address}</p>
              <div className="row">
                <p>bikes: {station.free_bikes}</p>
                <p>slots: {station.empty_slots}</p>
                <p>{distance} km</p>
              </div>

              <Link className="read-more" href={`/stations/${station.id}`}>
                Pick station
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

//klikbare link oulleh

import { getDistance } from '@/utils/getDistance';
import StationImage from '@/components/StationImage';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
  const station = props.station;
  const location = props.location;
  const distance =
    getDistance(
      location.latitude,
      location.longitude,
      station.latitude,
      station.longitude,
    ).distance / 100;
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
                <p className="number">
                  {' '}
                  <FontAwesomeIcon
                    icon={faBicycle}
                    size="xl"
                    className="icon"
                  />
                  {station.free_bikes}
                </p>
                <p className="number">
                  <FontAwesomeIcon
                    icon={faUnlockKeyhole}
                    size="xl"
                    className="icon"
                  />
                  {station.empty_slots}
                </p>
                <p className="number">
                  <FontAwesomeIcon size="xl" className="icon" icon={faRoute} />
                  {distance} km
                </p>
              </div>

              <Link
                className="read-more"
                location={location}
                href={`/stations/${station.id}`}
              >
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

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Above(props) {
  return (
    <div className="above">
      {/* <p className="greetings">Hey</p> */}
      <Link className={props.showButton ? 'showbutton' : 'hidebutton'} href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <p className="choosing">{props.text}</p>
    </div>
  );
}

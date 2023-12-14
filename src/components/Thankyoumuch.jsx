import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Thankyoumuch = () => {
  return (
    <>
        <div className="eleventh">
        <h2>ThankYou</h2>
          <p>We have received your online inquiry and forwarded your information to one of our <br/>Account Directors who will be in touch with you shortly.</p>
          <p>We look forward to working with you</p>
          <Link to="/custom-website-development/"><h5><FontAwesomeIcon className='count-6987' icon={faArrowLeft} />Back to Home</h5></Link>

        </div>
    </>
  )
}

export default Thankyoumuch;

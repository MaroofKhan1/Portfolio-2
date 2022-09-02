import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  function change_text() {
    const txt = "Sent";
    document.getElementById('contact-btn').value = txt;
    // document.getElementById('contact-btn').disabled = true;
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_f7v5sr7',
        'template_vbwlqrk',
        form.current,
        '1R4yNoexxnN1Y19hF'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am available to work on your projects and bring
            your ideas to life. I am just a click away. If you have a other request or question,
            don't hesitate to contact me using the form bellow either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input id='contact-btn' type="submit" className="flat-button" value="SEND" onClick={change_text} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ronald Portalatin Jr, <br />          
          Lakeland, FL <br />
          <br />
          (470) 807-8889
          <br />
          <span>RonaldPortalatin@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.147192939340815, -81.96468412836306]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.147192939340815, -81.96468412836306]}>
              <Popup>I currently live here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <Loader type="ball-beat" /> */}
    </>
  )
}

export default Contact

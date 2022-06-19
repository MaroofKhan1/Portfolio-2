import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Resume from '../../assets/images/Ronald_Portalatin Resume.pdf'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I fell in love with coding and programming at the age of 10 years old.
            I am fluent in classics like Html, Javascript and CSS.
            My field of Interest's are building new web technologies and products and also in areas related to deep learning and natural language processing.
            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks.
          </p>
          <p align="LEFT">
            Apart from coding, some other activities that I love to do! 
            <br />
            <br />
            🕹️ Playing Video Games <br />
            🎹 Producing Music <br />
            🎟️ Music Festivals <br />
            📷 Photography <br />
            🎣 Fishing 
          </p>
          <p>
            "Strive to build things that make a difference!"<br />
            -Ronald Portalatin Jr.
          </p> <br />
          <a href={Resume} download><button className='flat-button'>Download Resume</button></a>
        </div>

        <div className="about-me-avatar">
          <img src="https://i.ibb.co/vxBwGdD/pose3.png" alt="" />
        </div>
      </div>
      {/* <Loader type="ball-pulse-sync" /> */}
    </>
  )
}

export default About

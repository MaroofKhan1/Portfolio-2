import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Resume from '../../assets/file/Ronald_Portalatin Resume.pdf'
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
          Since I was a young child, I have been deeply passionate about computers and technology, which has only deepened as the years have gone by, inspiring me to pursue a career in software engineering and Product Management to create innovative solutions that can benefit both businesses and customers alike.
            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks.
          </p>
          <p align="LEFT">
            Apart from coding, some other activities that I love to do! 
            <br />
            <br />
            🎮 Playing Video Games <br />
            🏋️ Working Out <br />
            🖥️ Building Computers <br />
            🏈 FootBall <br />
            🏀 BasketBall 
          </p>
          <p>
            "I am committed to developing solutions that have a meaningful and lasting impact!"<br />
            -Maroof Khan.
          </p> <br />
          <a href={Resume} download><button className='flat-button'>Download Resume</button></a>
        </div>

        <div className="about-me-avatar">
          {/* <img src="https://i.ibb.co/vxBwGdD/pose3.png" alt="" /> */}
        </div>
      </div>
      {/* <Loader type="ball-pulse-sync" /> */}
    </>
  )
}

export default About

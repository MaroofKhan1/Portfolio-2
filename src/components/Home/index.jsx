import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Wave from '../../assets/images/wave.gif'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'a', 'r', 'o', 'o', 'f']
  const jobArray = ['K','h','a','n']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>i</span>
            &nbsp;
            <span className={letterClass}>t</span>
            <span className={letterClass}>h</span>
            <span className={letterClass}>e</span>
            <span className={letterClass}>r</span>
            <span className={letterClass}>e</span>
            &nbsp;
            <img className='wave-hand' src={Wave} alt="Wave" />
            &nbsp;
            <span className={letterClass}>i</span>
            <span className={letterClass}>'m</span>
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2 className='job-title'>FRONT END DEVELOPER | PRODUCT MANAGER</h2>
          <h2 className='description'>I'm a software engineer and graphic designer that has skills in both the back-end of web applications and the front-end based in Lakeland, FL</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className='home-avatar'>
          <img src="https://i.ibb.co/H2YqrY0/pose2.png" alt=''></img>
        </div>
      </div>

      {/* <Loader type="ball-beat" /> */}
    </>
  )
}

export default Home

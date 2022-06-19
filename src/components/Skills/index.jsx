import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 's', 'k', 'i', 'l', 'l','s']}
              idx={15}
            />
          </h1>
          <p>I love to keep a variety of tools in my tech stack. I also make sure to be pro at using one tool before moving on to the next. I keep myself up to date with the latest technologies around.</p>
          <p>Technologies and languages that I use to make my product everyday</p>
          <div className='my-skills'>
            <a className='skill-link' href="https://www.w3schools.com/html/default.asp" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg" />
              <p>HTML</p>
            </a>
            <a className='skill-link' href="https://www.w3schools.com/css/default.asp" rel="noopener noreferrer" target="_blank">
              <img alt=""src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" />
              <p>CSS</p>
            </a>
            <a className='skill-link' href="https://www.w3schools.com/js/default.asp" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" />
              <p>Javascript</p>
            </a>
            <a className='skill-link' href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/sass.svg" />
              <p>Sass</p>
            </a>
            <a className='skill-link' href="https://nodejs.org/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg" />
              <p>NodeJS</p>
            </a>
            <a className='skill-link' href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" />
              <p>React</p>
            </a>
            <a className='skill-link' href="https://www.python.org/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg" />
              <p>Python</p>
            </a>
            <a className='skill-link' href="https://expressjs.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://i.ibb.co/XVZz4vw/download.png" />
              <p>Express</p>
            </a>
            <a className='skill-link' href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://img.icons8.com/color/344/bootstrap.png" />
              <p>Bootstrap</p>
            </a>
            <a className='skill-link' href="https://www.postgresql.org/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://img.icons8.com/color/344/postgreesql.png" />
              <p>PostgreSQL</p>
            </a>
            <a className='skill-link' href="https://www.heroku.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/heroku.svg" />
              <p>Heroku</p>
            </a>
            <a className='skill-link' href="https://jquery.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://i.ibb.co/q7Rwv21/icons8-jquery-100.png" />
              <p>Jquery</p>
            </a>
            <a className='skill-link' href="https://mongodb.com/" rel="noopener noreferrer" target="_blank">
              <img alt="" src="https://img.icons8.com/color/344/mongodb.png" />
              <p>MongoDB</p>
            </a>
          </div>
        </div>

        <div className="about-me-avatar">
          
        </div>
      </div>
      {/* <Loader type="ball-pulse-sync" /> */}
    </>
  )
}

export default Skills


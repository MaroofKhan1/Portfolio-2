import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
               
                <div className="projects-grid">

                  <div className="project">
                    <img src="https://i.imgur.com/wgRvroV.png" alt="" />
                    <h3>Grant Guide</h3>
                    <p>Developed a web application to facilitate the process of identifying and applying for environmental grants for under-resourced communities, utilizing a user-friendly interface.</p>
                    <ul className="skills-used">
                      <li>React</li>
                      <li>MongoDB</li>
                      <li>WebSocket</li>
                    </ul>
                    <div className="app-launch">
                    <a href="https://github.com/MaroofKhan1/GrantGuide"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                    <a href="https://grant-guide.herokuapp.com"><FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#4d4d4e" /></a>
                    </div>
                  </div>

                  <div className="project">
                    <img src="https://camo.githubusercontent.com/6aadadcaf85b2b541645181ea2af20cba60a3d0af97332b6c42c3f6348f2ed80/68747470733a2f2f692e6962622e636f2f7858715135485a2f53637265656e2d53686f742d323032322d30342d32392d61742d312d32332d34322d414d2e6a7067" alt="" />
                    <h3>Top Kek</h3>
                    <p>Created a Twitch media platform that allows the user to post funny moments they have clipped of a streamer along with the ability to leave comments and rate.</p>
                    <ul className="skills-used">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>MongoDB</li>
                      <li>Express</li>
                      <li>Node.JS</li>
                      <li>Heroku</li>
                    </ul>
                    <div className="app-launch">
                      <a href="https://github.com/coltonsaywhatt/top-kek-project"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                      <a href="https://top-kek.herokuapp.com/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#4d4d4e" /></a>
                    </div>
                  </div>

                  <div className="project">
                    <img src="https://i.ibb.co/vXjfdp5/Screen-Shot-2022-05-25-at-5-51-36-PM.png" alt="" />
                    <h3>Tweepy</h3>
                    <p>Developed a social media platform that allows users to post both text and images.</p>
                    <ul className="skills-used">
                      <li>Python</li>
                      <li>Django</li>
                      <li>PostgreSQL</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>GIT</li>
                      <li>Bootstrap</li>
                      <li>Heroku</li>
                    </ul>
                    <div className="app-launch">
                    <a href="https://github.com/coltonsaywhatt/Tweepy"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                    <a href="https://tweepyofficial.herokuapp.com/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#4d4d4e" /></a>
                    </div>
                  </div>

                </div>


            </div>





            
            {/* <Loader type="ball-beat" /> */}
        </>
    );
}

export default Portfolio;
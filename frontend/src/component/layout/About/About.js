import React from 'react'
import './aboutSection.css'
import {Button, Typography, Avatar} from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
const About = () => {
  const visitGithub = () => {
    window.location = 'https://github.com/ingenieurimran'
  }
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{width: '10vmax', height: '10vmax', margin: '2vmax 0'}}
              src="https://avatars.githubusercontent.com/u/53061089?v=4"
              alt="Founder"
            />
            <Typography>Imran Ali</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit Github
            </Button>
            <span>
              This is a sample wesbite made by @imranali. Only with the purpose
              to use MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/watch?v=tL5sYdlk20I"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

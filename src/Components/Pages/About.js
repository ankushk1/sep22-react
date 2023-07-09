import React from 'react'
import {useLocation} from 'react-router-dom';

const About = () => {
  const location = useLocation();

  console.log('Location ---> ',location)
  return (
    <div>About</div>
  )
}

export default About
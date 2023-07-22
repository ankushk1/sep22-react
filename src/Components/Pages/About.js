import React from 'react'
import {useLocation, useParams} from 'react-router-dom';

const About = () => {
  const location = useLocation();

  console.log('Location ---> ',location)
  const params = useParams();

  console.log('params ---> ',params)

  return (
    <div>About</div>
  )
}

export default About
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { selectCount } from '../../Redux/CounterSlice';
const Contact = () => {

  const [queryParams] = useSearchParams()

  const globalCount = useSelector(selectCount);
  console.log(globalCount)

  return (
    <div>Contact</div>
  )
}

export default Contact
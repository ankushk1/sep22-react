import React from 'react'
import { useFetch } from '../utils/CustomHooks'

const ApiComp2 = () => {

  const {data} = useFetch('https://jsonplaceholder.typicode.com/todos');

  console.log(data)

  return (
    <div>ApiComp2</div>
  )
}

export default ApiComp2
import React from 'react'
import { Counter } from './CounterAppProvider'

const ChildTwo = () => {

  const {count} = Counter()
  return (
    <div>ChildTwo : {count}</div>
  )
}

export default ChildTwo
import React from 'react'

import './CounterOutput.css'

const CounterOutput = (props) => (
  <div className="counter-output">Counter: {props.value}</div>
)

export default CounterOutput

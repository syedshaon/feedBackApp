import React from 'react'
import spinner from '../assets/Loading_icon.gif'

function Spinner() {
  return <img src={spinner} alt="Loading" style={{
    width: '200px',
    margin: ' 0 auto',
    display: 'block'
  }}/>
}

export default Spinner

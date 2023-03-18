import React from 'react'
import Card from '../components/shared/Card'
import {Link  } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
        <div className='container'>
            About Page
        </div>
        <p>
            <Link to='/'>Back to Homepage</Link>
        </p>
    </Card>
    
  )
}

export default AboutPage

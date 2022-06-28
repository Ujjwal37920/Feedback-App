import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
    <div className='about'> 
    <h1>About This Project</h1>
    <p>This is a react app to leave feedback for any product or service.
    </p>
    <p>Version 1.0.0</p>
    <Link to='/'>
        Back to Home
    </Link>
    </div>
    </Card>
  )
}

export default About
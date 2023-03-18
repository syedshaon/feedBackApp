import React from 'react' 
import PropTypes from 'prop-types'



function Header (props) {
  return (
    <header style={{backgroundColor: 'rgba(0,0,0,.4)', color: 'pink' }}>
        <div className="container">
            <h1>Feedback UI</h1>
            
            
        </div>
    </header>
     
  )
}

export default  Header;


Header.propTypes = {
    title: PropTypes.string
}

 


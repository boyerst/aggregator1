import React from 'react'
import '../App.css'
import Footer from 'rsuite/Footer';


function Foot() {

  const {REACT_APP_EMAIL} = process.env



  return (
    <Footer className="footer">
      <hr/>   
      <p>&copy; 2023-2024</p>
      <a href={`mailto:${REACT_APP_EMAIL}?subject=Prussia Gate App`}>Contact Webmaster</a>
    </Footer>

  )

}





export default Foot

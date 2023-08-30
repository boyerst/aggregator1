import React from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { seriesPartOne } from "../data"
// import Iframe from 'react-iframe'


function Parts() {

  console.log("seriesPartOne in Parts.js: ", seriesPartOne)
  // console.log(location.pathname)


  // const { slug } = useParams()
  // const part = seriesParts[slug]


  // const { title, rumble } = part

  return (
    <div>
      <h2>parts.js</h2>
      {/*<h3>{title}</h3>*/}
      {/*<Iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/vsk5rv/?pub=4&start=5338" frameborder="0" allowfullscreen />*/}
      {/*<Iframe class="rumble" width="640" height="360" src={rumble} frameborder="0" allowfullscreen />  */}
    </div>
  )
}

export default Parts



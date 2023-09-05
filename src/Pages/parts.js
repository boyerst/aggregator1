import React from "react"
import { useParams } from "react-router-dom"
import { Header} from 'rsuite'
import "../App.css"
import { seriesPartOne } from "../data"
// import Iframe from 'react-iframe'


function Parts() {

  console.log("seriesPartOne in Parts.js: ", seriesPartOne)
  // console.log(location.pathname)


  const { slug } = useParams()
  const part = seriesPartOne[slug]
  console.log("part: ", part)

  const { title, rumble } = part


  return (
    <div>
      <Header>
        <h2 className="header">{title}</h2>
      </Header>
{/*      {Object.entries(seriesPartOne).map(([slug, {title}]) => {
          <ul key={slug}>
            <li>{title}</li>
          </ul>
      })}*/}
      <h4>{rumble}</h4>
      <h4>parts.js</h4>
      {/*<h3>{title}</h3>*/}
      {/*<Iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/vsk5rv/?pub=4&start=5338" frameborder="0" allowfullscreen />*/}
      {/*<Iframe class="rumble" width="640" height="360" src={rumble} frameborder="0" allowfullscreen />  */}
    </div>
  )
}

export default Parts



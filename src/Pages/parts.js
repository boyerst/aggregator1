import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header} from 'rsuite'
import "../App.css"
import { seriesPartOne } from "../data"
import Iframe from 'react-iframe'


function Parts() {

  console.log("seriesPartOne in Parts.js: ", seriesPartOne)
  // console.log(location.pathname)


  const { slug } = useParams()
  const part = seriesPartOne[slug]
  console.log("part: ", part)

  const { title, rumble, substack } = part


  function iframeError() {
    document.getElementById("myFrame").src = "https://www.youtube.com/embed/7vYJipziT68?si=PFQLkFyXTELa-Z64"
  }

  return (
    <div className="partsDiv">
      <Header>
        <h2 className="header">{title}</h2>
      </Header>
      <h4 className="partsContent">
        <a className="links" href={`${substack}`} rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          SubStack: {title}
        </a>
      </h4>

      <iframe 
        id="myFrame"
        onError={iframeError()}
        className="iframe" src="https://prussiagate.substack.com/embed" width="840" height="260">
      </iframe>

      <h4 className="partsContent">
        <a className="links" href={`${rumble}`} rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          Rumble: {title}
        </a>
      </h4>
      <Iframe className="iFrame" src={rumble} width="840" height="472" allowfullscreen/>  
    </div>
  )
}

export default Parts



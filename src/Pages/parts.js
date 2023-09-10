import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header} from 'rsuite'
import "../App.css"
import { seriesPartOne } from "../data"
import Iframe from 'react-iframe'
import Rumble2 from "../assets/rumble2.png"


function Parts() {

  console.log("seriesPartOne in Parts.js: ", seriesPartOne)
  // console.log(location.pathname)


  const { slug } = useParams()
  const part = seriesPartOne[slug]
  console.log("part: ", part)

  const { title, rumble, substack } = part

  const [iframeLoaded, loadIframe] = useState(false)
  console.log(iframeLoaded)
  console.log(!iframeLoaded)


  function iframeLoad(event) {
    console.log("TIMESTAMP BEFORE: ", event.timeStamp)
    // if it takes more that 1 second to load, then call loadIframe to change it to true in order to display the iframe
      // this is because the valid embed links take longer than 1 second whilst the invalid links will take less than ~ 1 second to load (ie fail)
    if (event.timeStamp > 1100) {
      console.log("TIMESTAMP AFTER: ", event.timeStamp)
      loadIframe(true)
      console.log("🟢iframeLoad TOGGLED")
    } 
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

      <div>
        {
          // If iframeLoaded is false...
          iframeLoaded === false
            ?  <img src={Rumble2} alt=""/> 
            : ""
        }
         <iframe 
            id="myFrame"
            onLoad={iframeLoad}
            // if iframeLoaded is false apply noiframe, else apply iframe
            className={!iframeLoaded ? "noiframe" : "iframe"} src="https://prussiagate.substack.com/embed" width="840" height="260">
          </iframe>
      </div>

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



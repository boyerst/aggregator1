import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header} from 'rsuite'
import "../App.css"
import { seriesPartOne } from "../data"
import Iframe from 'react-iframe'
import Rumble from "../assets/rumble.png"
import { ReactComponent as Substack } from "../assets/substack-icon.svg"
import { ImLink } from 'react-icons/im'


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
    // if (event.timeStamp > 1100) {
    if (event.timeStamp > 3000) {
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
        <ImLink className="linkIcon" />

        <a className="links" href={`${substack}`} rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          <Substack alt="" width="20px" height="20px" className="linkIcon"/>
          SubStack: {title}
        </a>
      </h4>

      <div>
{/*        {
          // If iframeLoaded is false...
          iframeLoaded === false
            ?  <img src={Rumble2} alt=""/> 
            : ""
        }*/}
         <iframe 
            src="https://prussiagate.substack.com/embed" 
            // src="https://www.youtube.com/embed/W8LlgS9YCP4?si=Dnwk-y-cq_bKWOha"
            id="myFrame"
            onLoad={iframeLoad}
            // onLoad={iframeLoad((event) => {})}
            // onLoad={event => iframeLoad(event)}
            // if iframeLoaded is false apply noiframe, else apply iframe
            // className={!iframeLoaded ? "noiframe" : "iframe"} 
            scrolling="no"
            title="Substack embed"
            width="840" 
            height="260">
          </iframe>
      </div>

      <h4 className="partsContent">
        <ImLink className="linkIcon" />
        <a className="links" href={`${rumble}`} rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          <img src={Rumble} alt="" width="35px" height="25px" style={{ margin: "0px -3px 3px -8px" }}/>
          Rumble: {title}
        </a>
      </h4>
      <Iframe className="iFrame" src={rumble} width="840" height="472" allowfullscreen/>  
    </div>
  )
}

export default Parts



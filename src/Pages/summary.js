import React from "react"
import "../App.css"
import { Header} from 'rsuite'
import Frederick from "../assets/frederick.jpeg"
import { ReactComponent as Substack } from "../assets/substack-icon.svg"
import { ImLink } from 'react-icons/im'






function Summary() {



  return (
    // <div style={{ margin: "100px 50px 50px 80px" }}>
    <div className="partsDiv">
      <Header>
        <h2 className="header">Summary</h2>
      </Header>
      <h4 className="partsContent">
        <ImLink className="linkIcon" />
        <a className="links" href="https://prussiagate.substack.com/p/prussiagate-summary" rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          <Substack alt="" width="20px" height="20px" className="linkIcon"/>
          Prussia Gate Summary
        </a>
      </h4>
      <img src={Frederick} alt=""/>
    </div>
  )
}

export default Summary
import React from "react"
import "../App.css"
import { seriesPartOne } from "../data"
import { ReactComponent as Rumble } from "../assets/rumble1.svg"
import Rumble2 from "../assets/rumble2.png"
import { ReactComponent as Substack } from "../assets/substack-icon.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"






function About() {



  return (
    <div style={{ margin: "100px 50px 50px 0px" }}>
      <h4>About The "Prussia Gate" series, written by Will Zoll...</h4>
      <div style={{textAlign: "center", marginTop: "50px", marginBottom: "50px"}}>
        <h4>
          "An invisible hand sits behind humanity, exerting control over the human will.
        </h4>
        <h4>
          This hidden virus scours the earth, looking for hosts who will adopt its ideology, and wage war against dissenters.
        </h4>
        <h4>
          You cannot leave a captivity that you cannot see."
        </h4>
      </div>
      <h4 style={{ margin: "40px 0px 40px 0px" }}>
        You will find each part of the series in the navigation menu. Included are links to the original piece and video of narration done by Patrick Gunnels on his show 'Reading Epic Threads'. 
      </h4>
      <h4 style={{ margin: "0px 0px 40px 0px" }}>
        Please follow Will Zoll & Patrick Gunnels using the links provided below: 
      </h4>
      {/*<iframe src="https://prussiagate.substack.com/embed" width="640" height="260" ></iframe>*/}
      <div style={{ marginBottom: "40px" }}>
        <a href="https://prussiagate.substack.com/" rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          {/*<img src={Substack}  width="290px" height="50px" />*/}
          <Substack width="60px" height="60px" />
        </a>
   {/*   </div>
      <div> */}     
        <a href="https://rumble.com/user/pgunnels" rel="noopener" rel="noreferrer" rel="nofollow" target="_blank"> 
          {/*<Rumble width="290px" height="80px" />*/}
          <img src={Rumble2} alt="" width="95px" height="70px" style={{ marginBottom: "55px" }}/>
        </a>
        <a href="https://twitter.com/pgunnels1" rel="noopener" rel="noreferrer" rel="nofollow" target="_blank">
          <Twitter width="130px" height="130px" style={{ marginBottom: "-30px", marginLeft: "-30px" }}/>
        </a>
      </div>
           
    </div>
  )
}

export default About
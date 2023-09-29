import './App.css'
import { Container, Header, Content, Sidebar, Sidenav, Nav, Toggle, Animation, Button } from 'rsuite'
import PageIcon from '@rsuite/icons/Page'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate, NavLink } from 'react-router-dom'
import { sectionOne, sectionTwo, sectionThree } from "./data"
import Part from "./pages/parts"
import About from "./pages/about"
import Summary from "./pages/summary"
import Prussia from "./assets/prussiagate.jpeg"
import Footer from "./components/Footer"




const headerStyle = {
  paddingTop: 15,
  paddingLeft: 15,
  marginBottom: 50,
  fontSize: 28,
  height: 80,
  // backgroundColor: '#34c3ff',
  // color: ' #fff',
  whiteSpace: 'nowrap',
  // overflow: 'hidden'
}



function NoMatch() {
  return (
    <div className="noMatch">
      <div className="noMatchHeader">      
        <h2>404: Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
        <Button to="/" as={Link} appearance="ghost" active> Home </Button>
      </div>
    </div>
  );
}



function AppLayout() {

  const [expanded, setExpanded] = useState(true)
  const [activeKey, setActiveKey] = useState("1")
  const [expandSidenav, setExpandSidenav] = useState(true)


  // const { slug } = useParams()
  // console.log("slug: ", slug )
  // const part = seriesPartOne[slug]
  // console.log("part: ", part)
  console.log("activeKey: ", activeKey)



  return (
         // <code>App Name</code>


    <>
      <div>
        <Container>
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expanded ? 260 : 56}
            collapsible
          >
          <Sidenav.Header as={Link} to="/" className="homeNav">
              <div style={headerStyle}>
                <span> 
                  <code>
                    { expanded 
                      ? <div><img src={Prussia} alt="" style={{ marginRight: "10px" }} width="45px" height="55px"></img>Prussia Gate</div>
                      : <img src={Prussia} alt="" width="45px" height="55px" /> 
                    }
                  </code>
                </span>
              </div>
            </Sidenav.Header>
            {/*<hr />*/}
            <Sidenav expanded={expanded} appearance="subtle">
              <Animation.Bounce in={expanded}>
                <Sidenav.Body>
                  <Nav activeKey={activeKey} onSelect={setActiveKey} >
                    <Nav.Item as={Link} to='/' eventKey="1" >About</Nav.Item>
                    <Nav.Item as={Link} to='/summary' eventKey="2">Summary</Nav.Item>
                    <hr />
                    {Object.entries(sectionOne).map(([slug, {title}]) => {
                      return (
                        <Nav.Item as={Link} to={`/parts/${slug}`} key={slug} eventKey={slug} >
                          {title}
                        </Nav.Item>
                      )
                    })}
                    <Nav.Menu placement="rightStart" eventKey="3" title="Marburg">
                      {Object.entries(sectionTwo).map(([slug, { title }]) => {
                        return (
                          <Nav.Item as={Link} to={`/parts/${slug}`} key={slug} eventKey={slug} >
                            {title}
                          </Nav.Item>
                        )
                      })}
                    </Nav.Menu>
                    <Nav.Menu placement="rightStart" eventKey="4" title="Not Since 1917">
                      {Object.entries(sectionThree).map(([slug, { title }]) => {
                        return (
                          <Nav.Item as={Link} to={`/parts/${slug}`} key={slug} eventKey={slug} >
                            {title}
                          </Nav.Item>
                        )
                      })}
                    </Nav.Menu>
                  </Nav>
                </Sidenav.Body>
              </Animation.Bounce>
              <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
          </Sidebar>
          <Container >

            <Content>
              <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/summary" element={<Summary />}/>
                <Route path="/parts/:slug" element={<Part />}/>
                <Route path="*" element={<NoMatch />} />


              </Routes>
            </Content>
          </Container>
        </Container>
        <Footer />
      </div>

    </>

  );
}

export default AppLayout;


import './App.css'
import { Container, Header, Content, Sidebar, Sidenav, Nav, Toggle, Animation } from 'rsuite'
import PageIcon from '@rsuite/icons/Page'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate, NavLink } from 'react-router-dom'
import { seriesPartOne } from "./data"
import Parts from "./pages/parts"
import About from "./pages/about"
import Prussia from "./assets/prussiagate.jpeg"




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





function AppLayout() {

  const [expanded, setExpanded] = useState(true)
  const [activeKey, setActiveKey] = useState("1")
  const [expandSidenav, setExpandSidenav] = useState(true)


  const { slug } = useParams()
  console.log("slug: ", slug )
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
      {/*              { expanded 
                      ? "Prussia Gate" 
                      : "T" }*/}
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
                    <hr />
                    <Nav.Menu placement="rightStart" eventKey="1" title="Not Since 1917" icon={<PageIcon />}>
                      {Object.entries(seriesPartOne).map(([slug, { title }]) => {
                        return (
                          <Nav.Item as={Link} to={`${slug}`} key={slug} eventKey={slug} >
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
{/*            <Header>
              <h2 className="header">Part Title or App Title?</h2>
            </Header>*/}
            <Content>
              <Routes>
                <Route path="/" element={<About />}/>
                <Route path=":slug" element={<Parts />}/>
              </Routes>
            </Content>
          </Container>
        </Container>
      </div>

    </>

  );
}

export default AppLayout;


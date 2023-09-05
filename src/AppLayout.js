import './App.css'
import { Container, Header, Content, Sidebar, Sidenav, Nav, Toggle } from 'rsuite'
import PageIcon from '@rsuite/icons/Page'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate, NavLink } from 'react-router-dom'
import { seriesPartOne } from "./data"
import Parts from "./Pages/parts"
import Home from "./Pages/home"




const headerStyle = {
  padding: 18,
  fontSize: 28,
  height: 56,
  // backgroundColor: '#34c3ff',
  // color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}





function AppLayout() {

  const [expanded, setExpanded] = useState(true)
  const [activeKey, setActiveKey] = useState('1')
  const [expandSidenav, setExpandSidenav] = useState(true)


  console.log(window.location.protocol)
  

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
          <Sidenav.Header>
            <div style={headerStyle}>
              <span> 
                <code>
                  { expanded ? "App Title" : "T" }
                </code>
              </span>
            </div>
          </Sidenav.Header>
            <hr />
            <Sidenav expanded={expanded} appearance="subtle">
              <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey}>
                  <Nav.Menu placement="rightStart" eventKey="1" title="Not Since 1917" icon={<PageIcon />}>

{/*                    {Object.entries(seriesPartOne).map(([slug, { title }]) => {
                      return (
                        <Nav.Item key={slug} eventKey={slug}>
                          <Link to={`${slug}`} >{title}</Link>
                        </Nav.Item>
                      )
                    })}*/}
                    {Object.entries(seriesPartOne).map(([slug, { title }]) => {
                      return (
                        <Nav.Item as={Link} to={`${slug}`} key={slug} eventKey={slug}>
                          {title}
                        </Nav.Item>
                      )
                    })}
{/*                    {Object.entries(seriesPartOne).map(([slug, { title }]) => {
                      return (
                        <Nav.Item href={slug} key={slug} eventKey={slug}>{title}</Nav.Item>
                      )
                    })}*/}
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
              <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
          </Sidebar>
          <Container >
            <Header>
              <h2 className="header">Part Title or App Title?</h2>
            </Header>
            <Content>
              <Routes>
                <Route path="/" element={<Home />}/>
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


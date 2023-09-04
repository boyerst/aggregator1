import './App.css'
import { Container, Header, Content, Sidebar, Sidenav, Nav, Toggle } from 'rsuite'
import PageIcon from '@rsuite/icons/Page'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate } from 'react-router-dom'
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
  const [expand, setExpand] = useState(true)



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

      {/*              {seriesPartOne.map((part, index) => {
                      return (
                          <Nav.Item href="/parts" eventKey={index} key={index}>{part.title}</Nav.Item>
                      )
                    })}*/}
                    {Object.entries(seriesPartOne).map(([slug, { title }]) => {
                      return (
                        <li key={slug}>
                          <Nav.Item href={slug} eventKey={slug}>{title}</Nav.Item>
                        </li>  
                      )
                    })}
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
              <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
          </Sidebar>
          <Container >
            <Header>
              <h2 className="header">Page Title</h2>
            </Header>
            <Content>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/parts" element={<Parts />}/>
              </Routes>
            </Content>
          </Container>
        </Container>
      </div>

    </>

  );
}

export default AppLayout;


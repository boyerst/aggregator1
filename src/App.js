import './App.css'
import { Sidenav, Nav, Toggle } from 'rsuite';
import PageIcon from '@rsuite/icons/Page';
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate } from 'react-router-dom';
import { seriesPartOne } from "./data"





function App() {

  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');



  return (
         // <code>App Name</code>


    <Router>
      <div style={{ width: 240, padding: 10 }}>

        <hr />
        <Sidenav expanded={expanded}>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Menu placement="rightStart" eventKey="1" title="Not Since 1917" icon={<PageIcon />}>

                {seriesPartOne.map((part, index) => {
                  return (
                    <Nav.Item eventKey={index} key={index}>{part.title}</Nav.Item>
                  )
                })}

              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
        </Sidenav>
      </div>
    </Router>
  );
}

export default App;


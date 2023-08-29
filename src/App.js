import './App.css'
import { Sidenav, Nav, Toggle } from 'rsuite';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import { useState } from "react"
import { partOne } from "./data"




function App() {

  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');



  return (
         // <code>App Name</code>
    <div style={{ width: 240, padding: 10 }}>

      <hr />
      <Sidenav expanded={expanded}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Menu placement="rightStart" eventKey="1" title="Not Since 1917" icon={<MagicIcon />}>

              {partOne.map((item, index) => {
                return (
                  <Nav.Item key={index}>{item.title}</Nav.Item>
                )
              })}

            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
}

export default App;



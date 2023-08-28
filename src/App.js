import './App.css'
import { Sidenav, Nav, Toggle } from 'rsuite';
import { useState } from "react"

function App() {

  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');

  return (
         // <code>App Name</code>
    <div style={{ width: 240 }}>
      <Sidenav>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Menu title="Not Since 1917">
              
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default App;

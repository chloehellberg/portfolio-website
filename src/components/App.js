import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import  Nav  from "react-bootstrap/Nav";

function App() {
  return (
    <div className="appContainer">
      <Navbar collapseOnSelect expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand href="/" className = "font-weight-bold">
            <h1>CHLOE HELLBERG</h1>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/connect">
              <Nav.Link>Connect</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <div className="chloegarb">
//           <h1>CHLOE HELLBERG</h1>
//       </div>
//       <div className="navigationLinks">
//         <Nav>
//         <Nav.Link to="/">
//           <li>Home</li>
//         </Nav.Link>
//         </Nav>
//       </div>
//       <Routes />
//     </div>
//   );
// }
// export default App;

import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import  Nav  from "react-bootstrap/Nav";

function App() {
  return (
    <div className="appContainer">
      
      <Navbar collapseOnSelect expand="lg" className="mb-3 ">
        <LinkContainer to="/">
        <div className="leftNavbar">
          <Navbar.Brand href="/" className = "font-weight-bold">
            <div className="navName">
              <h1>CHLOE HELLBERG</h1>
            </div>
          </Navbar.Brand>
        </div>
        </LinkContainer>
        <Navbar.Toggle />
        <div className="rightNavbar">
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/">
              <Nav.Link className='homeLink'>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
              <Nav.Link className='aboutLink'>ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="portfolioLink">PORTFOLIO</Nav.Link>
            </LinkContainer>


            <LinkContainer to="/connect">
            <div className="hexConnect">
                <div className="hexTopNav"></div>
              <Nav.Link className="connectLink hexMiddleNav">CONNECT</Nav.Link>
                <div className="hexBottomNav"></div>
              </div>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </div>
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

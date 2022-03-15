// @flow 
import * as React from 'react';
import  { Nav } from 'react-bootstrap'

export const mainMenu = () => {
    return (
        <>

<Nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Nav.Link class="navbar-brand" href="#">Navbar</Nav.Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <Nav.Item class="nav-item">
          <Nav.Link class="nav-Nav.Itemnk active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item class="nav-item">
          <Nav.Link class="nav-Nav.Itemnk" href="#">Features</Nav.Link>
        </Nav.Item>
        <Nav.Item class="nav-item">
          <Nav.Link class="nav-Nav.Itemnk" href="#">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item class="nav-item">
          <Nav.Link class="nav-Nav.Itemnk" href="#">About</Nav.Link>
        </Nav.Item>
        <Nav.Item class="nav-item dropdown">
          <Nav.Link class="nav-Nav.Itemnk dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Nav.Link>
          <div class="dropdown-menu">
            <Nav.Link class="dropdown-item" href="#">Action</Nav.Link>
            <Nav.Link class="dropdown-item" href="#">Another action</Nav.Link>
            <Nav.Link class="dropdown-item" href="#">Something else here</Nav.Link>
            <div class="dropdown-divider"></div>
            <Nav.Link class="dropdown-item" href="#">Separated Nav.Itemnk</Nav.Link>
          </div>
        </Nav.Item>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</Nav>

   
        </>
    );
};

export default mainMenu ;
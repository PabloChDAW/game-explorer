"use client"

import { Navbar } from "flowbite-react"
import { Link } from "react-router" // Para que los enlaces funcionen con React Router

const AppNavbar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com"> {/* TODO: Cambiar la URL por la definitiva */}
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/sonic-the-hedgehog-1.png"
          alt="sonic-the-hedgehog"
          className="mr-4"
        />
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Game Explorer</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className="navbar-link">
          <Navbar.Link active={window.location.pathname === '/'}>Principal</Navbar.Link>
        </Link>

        <Link to="/buscador" className="navbar-link">
          <Navbar.Link active={window.location.pathname === '/buscador'}>Buscador</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavbar

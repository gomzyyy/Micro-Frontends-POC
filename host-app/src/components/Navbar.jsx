import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-title">Host App</div>
    <div className="navbar-links">
      <Link to="/chat" className="navbar-link">
        Go to Chat Page
      </Link>
      <Link to="/email" className="navbar-link">
        Go to Email Page
      </Link>
    </div>
  </nav>
  )
}

export default Navbar
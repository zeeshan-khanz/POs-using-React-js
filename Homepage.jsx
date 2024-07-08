import React from 'react'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <header>
       <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">DevPOS</Link>
          </div>

        </nav>
      </header>
      <main>

      </main>
    </div>
  )
}

export default Homepage

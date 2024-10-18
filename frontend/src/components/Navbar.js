import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navcolor">
  <div className="container-fluid navcolor">
    <a className="navbar-brand navcolor" href="#">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navcolor" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active navcolor" aria-current="page" to='/'>CreateBlog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navcolor" to='/all'>ShowBlogs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar
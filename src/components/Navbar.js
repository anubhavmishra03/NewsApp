import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Breaking Bulletin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                      <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                  </ul>
                  <ul className="nav-item dropdown" style={{color: "white"}}>
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: "75px", marginTop: "5px"}}>
                      Select Country
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item"><Link to="/">India</Link></li>
                      <li className="dropdown-item"><Link to="/us">United States</Link></li>
                      <li className="dropdown-item"><Link to="/fr">France</Link></li>
                      <li className="dropdown-item"><Link to="/ch">China</Link></li>
                      <li className="dropdown-item"><Link to="/ge">Germany</Link></li>
                    </ul>
                  </ul>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

export default Navbar

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3 fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Live News <span className="position-absolute  translate-middle badge rounded-pill bg-warning" style={{top: '50%', left: '13%', zindex: '1'}}>
    USA </span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">News Categories</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="/">Top - Headlines</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/general">General</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

import React from 'react'
import "./Navbar.css"
import NavLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <>

      <div className="container-fluid navbar-main">
        <div className="row border p-3 d-flex justify-content-between">
          <div className="col-md-5 col-lg-4 col-sm-6 col-7">
            <img src={NavLogo} alt='NavLogo' className='NavLogo' />
          </div>
          <div className="col-md-2 col-lg-2 col-sm-3 col-3">
            <img src={navProfile} alt='NavLogo' className='NavProfile' />
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
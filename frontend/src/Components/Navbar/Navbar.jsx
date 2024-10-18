import { useContext } from "react"
import logo from "../Assets/logo.png"
import "./Navbar.css"
import { FaCartPlus } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
const Navbar = () => {

  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar  fixed-top navbar-expand-lg navbar-light ">
        <div className="container ">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width="65" /></Link>
            <span className="navbar-email fs-3 mt-2"><Link to="/"> SHOPPER  </Link></span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link ul-color" aria-current="page" to="/">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mens">Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/womens">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">Kids</Link>
              </li>
            </ul>

            {localStorage.getItem("auth-token") ? <button className="btn btn-light text-dark navbar-btn" onClick={() => { localStorage.removeItem("auth-token"); navigate("/") }}>Logout</button> : <Link className="nav-link" to="/login"><button type="button" className="btn btn-light text-dark navbar-btn">  Login</button></Link>}




            <Link className="nav-link navbar-icon" to="/cart"><button type="button" className="btn btn-light position-relative">
              <FaCartPlus />
              <span className="position-absolute top-0 start-100 translate-middle p-2  bg-danger border border-light rounded-circle">
                {getTotalCartItems()}
              </span>
            </button>
            </Link>






          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
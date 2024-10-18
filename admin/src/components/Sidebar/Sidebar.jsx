import React from 'react';
import "./Sidebar.css";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div className=" d-flex flex-md-column align-items-start justify-content-around  p-3">
        <Link to="/addProduct" className="sidebar-link d-flex align-items-center mb-3 sidebar-box ">
          <img src={add_product_icon} alt='add_product_icon' className="me-2" />
          <p className="m-0">Add Product</p>
        </Link>
        <Link to="/listProduct" className="  sidebar-link d-flex align-items-center sidebar-box">
          <img src={list_product_icon} alt='list_product_icon' className="me-2" />
          <p className="m-0">Product List</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;


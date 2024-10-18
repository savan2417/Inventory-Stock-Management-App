import React from 'react';
import "./Admin.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import AddProduct from '../../components/AddProduct/AddProduct';
import ListProduct from '../../components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-xl-2 col-12 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-9 col-xl-10 col-12 p-3">
          <Routes>
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/listProduct' element={<ListProduct />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;

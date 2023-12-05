import React from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from "../../images/logo.png"

import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="text-2xl flex justify-between items-center  font-bold p-4 border-b-2 fixed w-full top-0 bg-black">
        <NavLink to={"/"}  >
          <span>
            <img src={logo} alt="" className="w-20 h-20 mr-7"/>
          </span>
        </NavLink>
        <NavLink to={"/"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"} hover:text-orange-700`
                                    }>
          <span >
            Home |
          </span>
        </NavLink>
        <NavLink to={"/csit"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span>
            BSC CSIT |
          </span>
        </NavLink>
        <NavLink to={"/bit"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"} hover:text-orange-700`
                                    }>
          <span >
            BIT |
          </span>
        </NavLink>
        <NavLink to={"/bca"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span >
            BCA |
          </span>
        </NavLink>
        <NavLink to={"/CE"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span >
            Computer Engineering
          </span>
        </NavLink>
        <div className="navbarsearch">
            
            <input type="text" placeholder="search..." className="pl-3"/>
            <SearchOutlinedIcon className="text-base ml-3"/>
          </div>
          <NavLink to="/register" style={{display:"flex",textDecoration:"none",flexDirection:"column",alignItems:"center",color:"darkred",fontSize:"15px"}}><AppRegistrationIcon/> Register Here</NavLink>
      </div>
     
     
    </>
  );
};

export default Navbar;
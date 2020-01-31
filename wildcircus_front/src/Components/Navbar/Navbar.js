import React from 'react';
import { NavLink } from "react-router-dom";
import BurgerIcon from '../BurgerIcon/BurgerIcon';


const Navbar = ({ close }) => {
  return (
    <>
    <div className="menu">
    <ul >
      <li>
        <NavLink onClick={close} className="current" to="/">
          Wild Performences
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="current" to="nextshow">
          Next Show
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="current" to="priceandreservation">
          Price and Reservation
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="current" to="allnewshow">
          All new show
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="current" to="aboutus">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="current" to="contactus">
          Contact us
        </NavLink>
      </li>
    </ul>
  </div>
  
  <BurgerIcon/>
    </>
  )
};

export default Navbar;

// /" component={WildPerformences} />
//       <Route path="/nextshow" component={NextShow} />
//       <Route path="/aboutus" component={AboutUs} />
import React from 'react';
import { NavLink } from "react-router-dom";
import BurgerIcon from '../BurgerIcon/BurgerIcon';


const Navbar = ({ close }) => {
  return (
    <>
    <div className="menu">
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          WildPerformences
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="nextshow">
          NextShow
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="priceandreservation">
          priceandreservation
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="allnewshow">
          allnewshow
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="aboutus">
          AboutUs
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="contactus">
          contactus
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
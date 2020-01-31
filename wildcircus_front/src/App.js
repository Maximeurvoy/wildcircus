import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import WildPerformences from './Components/WildPerformences/WildPerformences';
import NextShow from './Components/NextShow/NextShow';
import PricesAndReservations from './Components/PricesAndReservations/PricesAndReservations';
import AllNewShow from './Components/AllNewShow/AllNewShow';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Components/ContactUs/ContactUs';
import { Switch, Route } from 'react-router';
import Popup from "reactjs-popup";
import BurgerIcon from './Components/BurgerIcon/BurgerIcon';
import { connect } from 'react-redux';
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount(){
    axios.get('http://localhost:3000/representations')
    .then(result=>this.props.setData(result.data))
  }
  render() {
    console.log(this.props.data)

    return (
      <>
        <Popup
          modal
          overlayStyle={{ background: "transparent"}} 
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Navbar close={close} />}
        </Popup>

        <Switch>
          <Route exact path='/' component={WildPerformences}></Route>
          <Route path='/nextshow' component={NextShow}></Route>
          <Route path='/priceandreservation' component={PricesAndReservations}></Route>
          <Route path='/allnewshow' component={AllNewShow}></Route>
          <Route path='/aboutus' component={AboutUs}></Route>
          <Route path='/contactus' component={ContactUs}></Route>
        </Switch>

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    truc: state.truc,
    data:state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData:(data)=> dispatch ({type:'SETDATA',payload: data})

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

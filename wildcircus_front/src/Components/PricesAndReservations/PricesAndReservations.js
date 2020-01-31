import React from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import axios from 'axios';

import Dateformat from 'dateformat';


class PricesAndReservations extends React.Component {
  constructor() {
    super()
    this.state = {
      display: true,
      formOk: false
    }
  }
  updateDatabase = () => {
    const { placeNumber, city, date, hour } = this.state
    const form = { placeNumber, city, date, hour }
    console.log(form)
    axios.post('http://localhost:3000/reservations', form)
      .then(() => console.log('pass'))
      .then(() => axios.get('http://localhost:3000/representations')
        .then(result => this.props.setData(result.data))
      )
  }

  handleVerification = () => {
    this.setState({ display: !this.state.display })
  }
  handleChange = (e) => {
    const { firstName, lastName, city, date, email, hour, adultNumber, childNumber } = this.state

    this.setState({ [e.target.name]: e.target.value })
    if (firstName && lastName && city && date && email && hour && adultNumber && childNumber) {
      this.setState({ formOk: true })
      console.log('ok tout champ rempli')
      let newDate = new Date(date)
      console.log(Dateformat(newDate, 'ddd mmm dS yyyy'));

      if (newDate.getDay() < 5 && newDate.getDay() > 0) {
        this.setState({ total: (adultNumber * 16 + childNumber * 8), placeNumber: (parseInt(adultNumber) + parseInt(childNumber)) })
        console.log('jour semaine')
      } else {
        this.setState({ total: (adultNumber * 18 + childNumber * 10), placeNumber: (parseInt(adultNumber) + parseInt(childNumber)) })
        console.log('weekend')
      }
    }
  }

  render() {
    const { firstName, lastName, city, date, email, hour, adultNumber, childNumber, total } = this.state
    console.log(this.state.display)
    return (
      <>
        <div>
          <h2 id="Prices">Prices</h2>
          <table>
            <thead>
              <tr>
                <th class="border"></th>
                <th>Adult</th>
                <th>Child under 12 years</th>
                <th>Group (over 10 persons)</th>
                <th id="border_top_right">School</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Weeks except wednesday</td>
                <td>16 £</td>
                <td>8 £</td>
                <td>14 £</td>
                <td>8 £</td>
              </tr>
              <tr>
                <td>weed-end and Wednesday</td>
                <td>18 £</td>
                <td>10 £</td>
                <td>10 £</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>

        </div>

        <form className='reservationForm' >

          <div id="identification_reservation">
            <fieldset id="Réservation">

              <legend>Réservation</legend>
              <label for="first_name">First Name</label>:<input type="text" onChange={this.handleChange} name="firstName" id="first_name" />
              <label for="last_name">Last Name</label>:<input type="text" onChange={this.handleChange} name="lastName" id="last_name" />
              <label for="email">Email</label>:<input type="email" onChange={this.handleChange} name="email" id="email" placeholder="Yourname@mailbox.com" />
            </fieldset>

            <fieldset id="your_reservation">
              <legend>Your reservation</legend>
              <label for="city">city</label>:
              <select name="city" id="city" onChange={this.handleChange}>
                <option >choose a city</option>

                {this.props.data.map((show, index) => <option key={index} value={show.ville}>{show.ville}</option>)}
              </select>

              <label for="date">date</label>:
              <select name="date" id="date" onChange={this.handleChange}>
                <option value=''>choose a date</option>
                {this.props.data.filter(show => show.ville == this.state.city).map((show, index) => <option key={index} value={Dateformat(show.date_representation, 'isoDate')}>  {Dateformat(show.date_representation, 'yyyy-mm-dd')}</option>)}
              </select>

              <label for="hour">hour</label>:
                <select name="hour" id="hour" onChange={this.handleChange}>
                <option value=''>choose an hour</option>
                {this.props.data.filter(show => show.ville == this.state.city).map((show, index) => <option key={index} value={show.heure_representation}>{show.heure_representation}</option>)}
              </select>


              <label for="adult_number">Adult number</label> : <input type="number" onChange={this.handleChange} name="adultNumber" min="0" max="7" id="adult_number" />
              <label for="child_number">Child number</label> : <input type="number" onChange={this.handleChange} name="childNumber" min="0" max="7" id="child_number" />
              <label for="your_message">For group réservation please contact us</label>
            </fieldset>
          </div>
        </form>

        {this.state.formOk &&
          <Popup trigger={<button className='reservationButton' onClick={() => console.log(this.state)} id="submit" >Command </button>} modal>
            {close => (
              <div className="modal">
                {/* <a className="close" onClick={close}>
                  &times;
        </a> */}
                <div className="header"> Order Summary </div>
                <div className="content">
                  Mrs/Mr {firstName} {lastName}<br />{email}<br />for the show of {city}<br />the {date} at {hour}<br />
                  {adultNumber} Adult<br />{childNumber} Child<br />TOTAL : {total} $
                </div>
                <div className="actions">
                  <button
                    className="buttonClass"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    Quit
                   </button>
                  <button
                    className="buttonClass"
                    onClick={() => {
                      this.updateDatabase()
                      console.log("modal closed ");
                      console.log(this.state)
                      close();
                    }}
                  >
                    payment
                  </button>

                </div>
              </div>
            )}
          </Popup>
        }

      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch({ type: 'SETDATA', payload: data })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PricesAndReservations);
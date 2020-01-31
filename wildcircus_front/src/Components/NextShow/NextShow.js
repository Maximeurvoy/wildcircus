import React from 'react';
import { connect } from 'react-redux';
import Dateformat from 'dateformat';


class NextShow extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props.data)

    return (
      <div className='nextShow'>
        <h2 id="performances">Next Show</h2>
        {this.props.data.map((show, index) =>
          <li style={{ color: show.places_dispo <= 15 && 'red' }}
            key={index}><span>{show.ville}</span> {Dateformat(show.date_representation, 'ddd mmm dS yyyy')}<br />
            {show.heure_representation}<br /> rest:{show.places_dispo <= 0 ? 'empty' : `${show.places_dispo} places`}</li>)}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NextShow);
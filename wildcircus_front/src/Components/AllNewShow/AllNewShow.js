import React from 'react';
import { connect } from 'react-redux';

class AllNewShow extends React.Component {
  render() {
    return (
      <>
        <h2 id="Contact">All New show</h2>
        {this.props.data.map((show, index) => <li key={index}>{show.ville} le {show.date_representation} à {show.heure_representation}</li>)}


      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(AllNewShow);
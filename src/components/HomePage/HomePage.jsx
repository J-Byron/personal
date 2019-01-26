// *----------* CRA *----------*
import React, { Component } from 'react'

// *----------* Components *----------*
import Header from '../Header/Header';
import WhenInView from '../WhenInView/WhenInView';
import ShowCase from '../ShowCase/ShowCase';


class HomePage extends Component {

  render() {

    return (
      <div>
        {/* Description */}

        {/* Photo and description */}
        <Header />

        {/* List of Applications */}
        <WhenInView
          component = {ShowCase}
        />

        {/* GitHub */}

        {/* Contact me */}


      </div>
    )
  }
}

export default HomePage

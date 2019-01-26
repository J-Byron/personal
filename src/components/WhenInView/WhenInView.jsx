// *----------* CRA *----------*
import React, { Component } from 'react'

// *----------*  *----------*
import Waypoint from 'react-waypoint';

class WhenInView extends Component {

  state = {
    isInView: false,
  }

  componentDidMount() {
    console.log(this.state.isInView);
  }

  onEnter = ({ previousPosition, currentPosition }) => {

    // 
    if ((previousPosition === Waypoint.below) || (currentPosition === Waypoint.inside)) {

      this.setState({
        isInView: true,
      })

      console.log(this.state.isInView);

    }
  }

  render() {

    // console.log('Rendered!');

    return (
      <div>
        <Waypoint
          onEnter={this.onEnter}
        >{
            this.state.isInView ? (
              <div style={{ visibility: `${this.state.isInView ? 'visible' : 'hidden'}` }}>
                < this.props.component />
              </div>
            ) : (
                null
              )
          }


        </Waypoint>

      </div>
    )
  }
}

export default WhenInView;

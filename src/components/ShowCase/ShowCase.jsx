// *----------* CRA *----------*
import React, { Component } from 'react';

// *----------* Styling *----------*
import '../../styles/build/ShowCase.css';

// *----------* Components *----------*
import TiltComponent from '../TiltComponent/TiltComponent';

// *----------* Images *----------*
import summonerImage from '../../assets/summonerProfile.png';
import statistics from '../../assets/statistics.png';
import matches from '../../assets/matches.png';



const options = {
  max: 10,
  perspective: 1000,
  scale: 1.2,
}



export class ShowCase extends Component {
  render() {
    return (
      <div className='showcaseContainer '>
        <TiltComponent 
          style={{
            flex: 2,
            backgroundColor: '#212830',
            borderRadius: '3px',
          }}
        >

          <TiltComponent
            options={options}
          >

            <div className='helix-tilt'>
              <div 
                className='helix-summoner' 
                style={{
                  background: `url(${summonerImage}) no-repeat center`,
                  backgroundSize: 'contain'
                  }}></div>

              <div className='helix-row'>
                <div className='helix-stats' style={{
                  background: `url(${statistics}) no-repeat left`,
                  backgroundSize: 'contain',
                }}></div>

                <div className='helix-history' style={{
                  background: `url(${matches}) no-repeat center`,
                  backgroundSize: 'contain',
                }}></div>

              </div>
            </div>
          </TiltComponent>

        </TiltComponent>

        <div className='helix-col' style={{
          marginLeft: '6%',
          width: '40%',
          display: 'flex',
        }}>
          <div className='helix-header'>
            Helix.GG
          </div>

          <div className='helix-text'>
            A player analytics application for the popular video game <a className='lol-link' href='https://na.leagueoflegends.com/en/'> League of Legends </a>
            that allows users to review their teammate’s in-game strengths, weaknesses, and behaviour prior to a match, giving users an edge in finding better
            teammates and ultimately playing more enjoyable matches.
        </div>
        </div>
      </div >
    )
  }
}

export default ShowCase

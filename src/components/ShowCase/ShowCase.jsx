// *----------* CRA *----------*
import React, { Component } from 'react';

// *----------* Styling *----------*
import './ShowCase.css';

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
            width: '60%',
            height: 300,
            backgroundColor: '#212830',
            borderRadius: '3px',
          }}
        >

          <TiltComponent
            options={options}
          >

            <div className='helix-col'>
              <div style={{
                background: `url(${summonerImage}) no-repeat center`,
                backgroundSize: 'contain',
                height: '125px',
                width: '100%',
                marginTop: '15px'
              }}></div>

              <div className='helix-row'
                style={{ width: '80%', margin: '5% auto 0% auto' }}
              >

                <div style={{
                  background: `url(${statistics}) no-repeat center`,
                  backgroundSize: 'cover',
                  height: '120px',
                  width: '40%',
                }}></div>

                <div style={{
                  background: `url(${matches}) no-repeat center`,
                  backgroundSize: 'cover',
                  height: '120px',
                  width: '50%',
                }}></div>

              </div>
            </div>
          </TiltComponent>

        </TiltComponent>

        <div className='helix-col' style={{
          marginLeft: '6%',
          width: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className='helix-header'>
            Helix<em className='helix-gg'>.GG</em>
          </div>

          <div className='helix-text'>
            A player analytics application for the popular video game <a className='lol-link' href='https://na.leagueoflegends.com/en/'> League of Legends </a>
            that allows users to review their teammate’s in-game strengths, weaknesses,
            and behaviour prior to a match, giving users an edge in finding better
            teammates and ultimately playing more enjoyable matches.
        </div>
        </div>
      </div >
    )
  }
}

export default ShowCase

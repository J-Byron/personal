// *----------* CRA *----------*
import React, { Component } from 'react';

// *----------* Components *----------*
import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix';

// *----------* Styling *----------*
import { CSSTransition } from 'react-transition-group';
import './Header.css';

// *----------*  *----------*
import { findDOMNode } from 'react-dom';

const options = {
    max: 10,
    perspective: 1000,
    scale: 1.05,
}

// Displays profile photo and a brief biography
class Header extends Component {

    render() {
        return (
            <div className='profile-header'>

                <TiltPhaseSix
                    options={{}}
                    style={{
                        backgroundSize: 'fit',
                        height: '200px',
                        width: '200px',
                        margin: '0px auto 40px auto'
                    }}
                >
                    <div
                        className='profile-photo'
                    />
                </TiltPhaseSix>


                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={5000}
                    classNames='appear-description'
                >
                    <div className='profile-description'>
                        Full Stack developer with a passion for creating comprehensive web experiences.
                        When I’m not  working on a project I can be found exploring Minneapolis or honing my design skills.
                        Currently I am looking for a collaborative Front end or Full Stack role to further grow my skills
                        as a software engineer and fulfill my passion to bring enjoyable experiences to a wider audience.
                    </div>

                </CSSTransition>
            </div>
        );
    }
}

export default Header;
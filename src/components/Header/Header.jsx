// *----------* CRA *----------*
import React, { Component } from 'react';

// *----------* Components *----------*
import TiltComponent from '../TiltComponent/TiltComponent';

// *----------* Styling *----------*
import { CSSTransition } from 'react-transition-group';
import './Header.css';

// Displays profile photo and a brief biography
class Header extends Component {

    render() {
        return (
            <div className='profile-header'>

                <TiltComponent
                    options={{}}
                    style={{
                        backgroundSize: 'fit',
                        height: '250px',
                        width: '250px',
                        // margin: '0px auto 40px auto'
                    }}
                >
                    <div
                        className='profile-photo'
                        style={{
                            // backgroundImage: 'url(https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg)',
                            // backgroundSize:'200px'
                        }}
                    />
                </TiltComponent>


                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={5000}
                    classNames='appear-description'
                >
                    <div className='profile-description'>
                        I'm a Full Stack developer with a passion for creating comprehensive web experiences.
                        When I’m not  working on a project I can be found exploring Minneapolis or honing my design skills.
                        Currently I am looking for a collaborative Front end or Full Stack role to further grow my skills
                        as a software engineer and fulfill my passion to bring enjoyable experiences to a wider audience.
                        Currently studying at <a href="https://primeacademy.io/" className='hyperlink-text'> Prime Digital Academy </a>.
                    </div>

                </CSSTransition>
            </div>
        );
    }
}

export default Header;
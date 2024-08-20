import React from 'react'

import './Publications.css'
import ScrollReveal from 'scrollreveal';

class Publications extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in-out',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.pubbox1);
        ScrollReveal().reveal(this.refs.pubbox2, { origin: 'left', delay: 100 });
        ScrollReveal().reveal(this.refs.pubbox3, { origin: 'left', delay: 300 });
        ScrollReveal().reveal(this.refs.pubbox4, { origin: 'left', delay: 500 });
        ScrollReveal().reveal(this.refs.pubbox5, { origin: 'left', delay: 700 });
        ScrollReveal().reveal(this.refs.pubbox6, { origin: 'left', delay: 900 });
    }
    render() {
        return (
            <>
            <div className='publication-header' ref='pubbox1'>
                    <h4>CERTIFICATES</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
            </div>
            <div className='publication-content'>
                <ol>
                    <li ref="pubbox2">
                    Participated in <b><u>Google Cloud Study Jam 2023</u></b>. 
                    Explored Google Cloud Computing environment and gained hands-on experience in Generative AI Arcade Game and Google Cloud Computing Foundations. 
                    Received Certificate of Appreciation and goodies from Google.
                    </li>
                    <br />
                    <li ref="pubbox3">
                    <b><u>IBM Front-End Developer Professional Certificate: </u></b>
                    Completed 11 Coursera courses compiled together, advancing Front-End Development skills from beginner to intermediate levels. 
                    Gained practical experience in front-end technologies including HTML, CSS, JavaScript, Bootstrap, React.js and 
                    other technologies like Git, GitHub, Software Engineering, Cloud Native.
                    </li>
                    <br/>
                    <li ref="pubbox4">
                    <b><u>Cloud 101</u></b> and <b><u>Introduction to Containers: </u></b>
                    Completed Coursera courses Cloud 101 and Introduction to Containers which helped me in gaining basic 
                    to practical knowledge about Cloud Computing and Container Technologies.
                    </li>
                    <br />
                    <li ref="pubbox5">
                    <b><u>Fundamentals of Network Communication: </u></b>
                    This networking certification course by Coursera helped me gain knowledge in Communication, Computer 
                    Networking, Network Architecture, Computer Architecture, Network Security and Software Architecture. 
                    </li>
                    <br />
                    <li ref="pubbox6">
                    <b><u>Introduction to Software Engineering: </u></b>
                    This certification course by Coursera helped me gain knowledge in Software Engineering, Software Architecture, 
                    Basic python programming, Agile and Scrum and Software Development Lifecycle(SDLC). 
                    </li>
                </ol>
            </div>
        </>
        )
    }
}

export default Publications
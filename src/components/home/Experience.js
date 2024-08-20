import React from 'react'

import './Experience.css'

import { SkillList } from './styled'

import ScrollReveal from 'scrollreveal'

class Experience extends React.Component {
    refs = React.createRef()
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in',
        }
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.expbox1)
        ScrollReveal().reveal(this.refs.expbox2, { origin: 'left', delay: 100 })
    }
    render() {
        return (
            <>
                <div className='exp-header' ref="expbox1">
                    <h1>EXPERIENCE</h1>
              
                </div>
                <div className='exp-content'>
                    <div className='exp-row' ref="expbox2">
                        <div className='exp-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='exp-column-h6'>Core Team Member</p>
                            <p className='exp-prof-name'>Association for Computing and Machinery</p>
                            <p className='exp-prof-name'>DIT University</p>
                            <p className='exp-date'>2021-2023</p>
                            <p className='exp-description'>
                                <ul>
                                    <li>Acquired front-end development skills by building 5+ projects using HTML, CSS, JavaScript, and the React.js framework.</li>
                                    <br/>
                                    <li>Explored various technical and non-technical fields, including development, debugging, and content writing, gaining
                                        practical knowledge, while proving my leadership by managing teams of up to 5 people, working under pressure to
                                        meet deadlines, and quickly adapting to new environments.</li>
                                        <br/>
                                        <li>Engineered a mobile-controlled "Sumo-Bot” using Arduino programming; showcased at the university’s annual fest
                                        in 2022, garnering 200+ interactions and demonstrating it’s practical application.</li>
                                        <br/>
                                        <li>Worked as the Publicity Head for a Cybersecurity event hosted by the chapter, significantly boosting attendance by
                                        30% which enhanced my communication skills.</li>
                                        
                                </ul>
                                <br/>
                            </p>
                            <div id='exp-skill'>
                                {/* Skills:{' '} */}
                                <SkillList>
                                    <span key='1'>HTML</span>
                                    <span key='2'>CSS</span>
                                    <span key='3'>JavaScript</span>
                                    <span key='4'>Reactjs</span>
                                    <span key='5'>Publicity</span>
                                    <span key='6'>Management</span>
                                    <span key='7'>Content Writing</span>
                                </SkillList>
                            </div>
                        </div>
                        <div className='exp-column2'>
                            <img src='/Images/AcmPhoto.jpg' alt='placeholder' />
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default Experience
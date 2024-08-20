import React from 'react';

import './Testimonial.css';
import { Star } from './styled';

import ScrollReveal from 'scrollreveal';

class Testimonial extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.testbox1, { delay: 100 });
        ScrollReveal().reveal(this.refs.testbox2, { origin: 'left', delay: 150 });
        ScrollReveal().reveal(this.refs.testbox3, { origin: 'right', delay: 200 });
        ScrollReveal().reveal(this.refs.testbox4, { origin: 'right', delay: 250 });
    }
    render() {
        return (
            <>
                <div className='testimonial-header' ref="testbox1">
                    <h4>TESTIMONIALS</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
                </div>
                <div className='testimonial-content'>
                    <div className='testimonial-row'>
                        <div className='testimonial-col' ref='testbox2'>
                            <div className='test-content-grid'>
                                <div className='test-stars'>
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                </div>
                                <div className='test-content'>
                                    <p className='test-text'>I highly recommend Yukti Singhal for her bright future in the engineering industry. 
                                        I taught her Cloud Computing, 
                                        Container Technology, and Data Structures. She is a sincere and hardworking student with a 
                                        strong drive to excel in her areas of interest. Her analytical approach and attention to detail 
                                        make her proficient in solving complex problems. She is innovative and actively engaged 
                                        in class discussions. Yukti's leadership, discipline, and team collaboration skills are commendable, 
                                        and I am confident she will exceed expectations with proper guidance.</p>
                                </div>
                                <div className='test-name'>
                                    <div className='test-img'>
                                        <img src='/Images/male.png' alt='male-placeholder' />
                                    </div>
                                    <div className='test-name-text'>
                                        <p></p>
                                        <b>Dr. Pradeep Singh Rawat</b>
                                        <br/>
                                        <p>Assistant Professor, School of Computing
                                            <br />DIT University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-col1' ref='testbox3'>
                            <div className='test-content-grid'>
                                <div className='test-stars'>
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                </div>
                                <div className='test-content'>
                                    <p className='test-text'>
                                        I had the pleasure of teaching Yukti Singhal Core and Advanced
                                        Java Programming. Yukti consistently performed very well, quickly grasping complex
                                        concepts and applying them effectively. Her attendance was exemplary, and her 
                                        dedication towards her studies was evident throughout the course. I am confident in 
                                        her ability to excel in future endeavours.
                                    </p>
                                </div>
                                <div className='test-name'>
                                    <div className='test-img'>
                                        <img src='/Images/female.png' alt='female-placeholder' />
                                    </div>
                                    <div className='test-name-text'>
                                    <p></p>
                                        <b>Dr. Bharti Sharma</b>
                                        <br/>
                                        <p>Associate Professor, School of Computing
                                            <br />DIT University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-col' ref='testbox4'>
                            <div className='test-content-grid'>
                                <div className='test-stars'>
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                </div>
                                <div className='test-content'>
                                    <p className='test-text'>Yukti Singhal has successfully completed the online, 
                                        non-credit Professional Certificate- IBM Front-End Developer.
                                        The Certificate holder has demonstrated the ability to build web pages 
                                        using HTML, CSS, and JavaScript; manage code using 
                                        GitHub repositories and branches; create applications using front-end 
                                        frameworks, such as React JS; and create a fully functional 
                                        front-ends for dynamic apps that interact with external/backend 
                                        services using RESTful APIs. The certificate holder should be ready to 
                                        take on the challenges of an entry-level front end developer role.
                                    </p>
                                </div>
                                <div className='test-name'>
                                    <div className='test-img'>
                                        <img src='/Images/male.png' alt='male-placeholder' />
                                    </div>
                                    <div className='test-name-text'>
                                        <p></p>
                                        <b>IBM Skills Network</b>
                                        <br/>
                                        <p>Coursera</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Testimonial
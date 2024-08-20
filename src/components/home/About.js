import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './About.css'
// import { StyledLink } from '../Links.styled'
import ScrollReveal from 'scrollreveal';


class About extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.box1);
        ScrollReveal().reveal(this.refs.box2, {origin: 'bottom', delay: 150});
        ScrollReveal().reveal(this.refs.box3, {origin: 'right', delay: 150});
    }
    render() {
        return (
            <>
                <div className='row'>
                    <div className='header-start column' ref="box1">
                        <h6>ABOUT ME</h6>
                        <p>My life in three words would be Chai, Books and Code :)</p>
                    </div>
                    <div className='column'>
                        {/* empty */}
                    </div>
                </div>
                <div className='row1' ref='about'>
                    <div className='column image-column' ref="box2">
                        <img src='/Images/Picture.jpg' alt='placeholder'/>
                    </div>
                    <div className='column about-content' ref="box3">
                        <p>
                        I am <b>Yukti</b>, a dedicated BTECH CSE final year student at DIT University, with a strong aspiration to become a 
                        <b> Software Engineer</b>. </p>
                        <p>My journey in <b>Web Development</b> began with a solid foundation gained through Coursera 
                        courses and hands-on projects, where I advanced from beginner to intermediate levels. I am proficient in 
                        <b> HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and have experience using frameworks like <b>Bootstrap</b> and <b>ReactJS</b> to create 
                        dynamic and user-centric web interfaces. </p>
                        <p>
                        <b>Java</b> programming fascinates me, and I am passionate about 
                        leveraging its power in my projects. </p> 
                        <p>
                        Additionally, I work with the <b>MERN</b> stack, version control systems 
                        like <b>Git</b>, and databases such as <b>MySQL</b> and <b>MongoDB</b>. My focus is on continuously enhancing my 
                        <b> Full Stack Development</b> skills and staying 
                        updated with industry trends to deliver intuitive and cutting-edge web experiences.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default About
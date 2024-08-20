import React from 'react'

import './Skills.css'
import ScrollReveal from 'scrollreveal';

class Skills extends React.Component {
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
        ScrollReveal().reveal(this.refs.pubbox7, { origin: 'left', delay: 950 });
    }
    render() {
        return (
            <>
            <div className='skills-header' ref='pubbox1'>
                    <h4>SKILLS</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
            </div>
            <div className='skills-content'>
                <ul>
                    <li ref="pubbox2">
                    <b><u>Frontend Technologies:</u></b>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Reactjs</li>
                    </ul>
                    </li>
                    <br />
                    <li ref="pubbox3">
                    <b><u>Backend Technologies:</u></b>
                    <ul>
                        <li>Expressjs</li>
                        <li>Nodejs</li>
                    </ul>
                    </li>
                    <br/>
                    <li ref="pubbox4">
                    <b><u>Databases:</u></b>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    </li>
                    <br />
                    <li ref="pubbox5">
                    <b><u>Programming Language:</u></b>
                    <ul>
                        <li>Java</li>
                    </ul>
                    </li>
                    <br />
                    <li ref="pubbox6">
                    <b><u>Familiar With:</u></b>
                     <ul>
                        <li>Nextjs</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Cloud Computing</li>
                        <li>Content Writing</li>
                     </ul>
                    </li>
                    <br/>
                    <li ref="pubbox7">
                    <b><u>Basic</u></b>
                     <ul>
                        <li>Git/GitHub</li>
                        <li>Discord</li>
                        <li>Problem Solving</li>
                        <li>OOPs and SOLID Principles</li>
                        <li>SEO</li>
                        <li>Debugging</li>
                        <li>Collaboration</li>
                     </ul>
                    </li>
                </ul>
            </div>
        </>
        )
    }
}

export default Skills
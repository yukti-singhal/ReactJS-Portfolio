import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import './Project.css'

import ScrollReveal from 'scrollreveal'

class Project extends React.Component {
    refs = React.createRef()
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        }
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.probox1)
       /**  ScrollReveal().reveal(this.refs.probox2, { origin: 'left'})
        ScrollReveal().reveal(this.refs.probox3, { origin: 'right'}) */
    }
    render() {
        return (
            <>
                <div className='pro-header' ref="probox1">
                    <h1>PROJECTS</h1>
              
                </div>
                <div className='pro-content'>
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Shopper</p>
                            <p className='pro-description'>
                                Shopper is a MERN Stack based E-commerce application to enable users to buy clothes hassle
                                free. 
                                The frontend is developed using Reactjs, the popular JavaScript framework which is used to build 
                                dynamic web applcations.
                                The backend is developed using Nodejs and Expressjs the popular framework which is used for
                                building RESTful APIs.
                                The database connectivity is done using MongoDB Atlas.
                                The Admin Panel feature enables to add and list products from the backend.
                                CSS is used for responsiveness and styling.
                            </p>
                            <a href="https://github.com/yukti-singhal/Shopper" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column2'>
                            <img src='/Images/Shopper.png' alt='placeholder' />
                        </div>
                    </div>
                    <div className='pro-row' ref="probox3">
                    <div className='pro-column2'>
                            <img src='/Images/Vidtube.png' alt='Placeholder' />
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>VidTube</p>
                            <p className='pro-description'>
                            VidTube is a clone of YouTube made by using React.js. The data is rendered by YouTube Data API which allows 
                            users to watch videos, 
                            browse according different categories, browse through recommendations. 
                            The frontend technolgies used with React are react-router-dom and redux toolkit.
                            CSS is used for responsiveness and styling.
                            </p>
                            <a href="https://github.com/yukti-singhal/VidTube" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                    </div>
                    {/* Add more projects */}
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Group Chat Application</p>
                            <p className='pro-description'>
                                A Group Chat Application made by using different concepts of Java programming language.
                                It enables more than one user at a time to send chat messages with each other in a group.
                                It has features of Sign Up and Log In to add users in the particular group.
                                The concepts of Java programming used are: Echo Server, JDBC, Swing, Multi threading, Exception Handling and Logs.
                                The database connectivity is achieved using SQL database MySQL.
                            </p>
                            <a href="https://github.com/yukti-singhal/GroupChatSystem" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column2'>
                            <img src='/Images/ChatApp.png' alt='placeholder' />
                        </div>
                    </div>
                    <div className='pro-row' ref="probox3">
                    <div className='pro-column2'>
                            <img src='/Images/Recipes.png' alt='Placeholder' />
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Recipes</p>
                            <p className='pro-description'>
                            This project is a Next.js recipes' page which shows different types of recipes using DummyJSON.
                            It was made while learning Nextjs framework for frontend development.
                            Next.js is a React framework that gives you building blocks to create web applications.
                            The styling is done by using Tailwind CSS.
                            </p>
                            <a href="https://github.com/yukti-singhal/Recipes" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                    </div>
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>CodersBlog</p>
                            <p className='pro-description'>
                                CodersBlog is a prototype of a Blog website made using Bootstrap.
                                Bootstrap is a free and open-source CSS framework directed at responsive, 
                                mobile-first front-end web development. It contains HTML, CSS and JavaScript-based 
                                design templates for typography, forms, buttons, navigation, and other interface components.

                            </p>
                            <a href="https://github.com/yukti-singhal/CodersBlog" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column2'>
                            <img src='/Images/CodersBlog.png' alt='placeholder' />
                        </div>
                    </div>
                    <div className='pro-row' ref="probox3">
                    <div className='pro-column2'>
                            <img src='/Images/wealthome.png' alt='Placeholder' />
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>wealthome</p>
                            <p className='pro-description'>
                            Wealthome is a prototype of real estate web application for finding, comparing and booking homes as 
                            per user's convenience.
                            Made by using HTML for structuring, CSS for styling and responsiveness and JavaScript for adding
                            interactivity.
                            </p>
                            <a href="https://github.com/yukti-singhal/wealthome" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                    </div>
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Landing Page</p>
                            <p className='pro-description'>
                            This is a simple landing page made by using React+ Vite to practice Tailwind CSS.
                            </p>
                            <a href="https://github.com/yukti-singhal/Landing-Page" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View Project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column2'>
                            <img src='/Images/Landingpage.png' alt='placeholder' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Project
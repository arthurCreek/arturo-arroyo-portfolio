import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js';
import Typical from 'react-typical';
import '../styles/styles.scss'



/******** 

    Options for the particle js library to display elements

********/
const options = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1763753266952075,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

/******** 

    Render this componenent (index page)

********/
const IndexPage = (props) => {

    /******** 
      Function for responsive navbar when 600px width and below
    ********/
  function toggleShow() {
    document.querySelector('.navbar__list').classList.toggle('Navbar__ToggleShow');
    document.querySelector('.navbar__container').classList.toggle('Navbar__Container__ToggleShow');
    document.querySelector('.navbar__logo_and_menu').classList.toggle('Navbar__Logo_and_menu_Toggleshow');
    document.querySelector('.navbar').classList.toggle('header__open');
    console.log('click');
  }

  return (
    <Layout>
      <SEO title="Arturo Arroyo" />

      {/**************************
        **** Hero section******
      ***************************/}
      <div>
        <div className="header__text">
          <div className="header__text--container">
            <h1 className="header__h1">Hi! I'm <span id="mars-text">Arturo Arroyo.</span></h1>
            <h2 className="header__h2">
              I'm a{' '}
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Web Developer.',
                  1000,
                  'Front End Developer.',
                  1000,
                  'React Developer.',
                  1000
                ]}
              />
            </h2>
          </div>
        </div>
        <Particles params={options} className="header__particles"/>
      </div>

      {/**************************
        **** Nav Bar ******
      ***************************/}
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo_and_menu">
            <Img  alt="logo"
                  className="navbar__logo"
                  fluid={props.data.arturo.childImageSharp.fluid} />
            <div onClick={toggleShow}>
              <Img  alt="menu icon"
                    className="navbar__icon"
                    
                    fluid={props.data.menu_icon.childImageSharp.fluid} />
            </div>
          </div>
          <div className="navbar__list">
            <a href="#">HOME</a>
            <a href="#section-my-works">PORTFOLIO</a>
            <a href="#section-my-skills">SKILLS</a>
            <a href="#section-about-me">ABOUT ME</a>
            <a href="#section-contact">CONTACT</a>
          </div>
        </div>
      </div>


      {/**************************
        **** My Works Section ******
      ***************************/}
      <section className="section my-works" id="section-my-works">
        <div className="my-works__container">

          <p className="portfolio">PORTFOLIO</p>
          <h1>MY WORKS</h1>

          <div className="my-works__item-container">
            <div className="card">
              <div className="face face--1">
                <div className="content">
                  <Img  alt="Gatsby"
                        fluid={props.data.gatsby_detailing.childImageSharp.fluid} />
                </div>
              </div>
              <div className="face face--2">
                <div className="content">
                  <p>Detail your car by the best in the business. Single Page Application using GatsbyJS.</p>
                  <p>Made With: GatsbyJS, HTML5, CSS3</p>
                  <a href="https://github.com/arthurCreek/gatsby-detailing">Github</a>
                  <a href="https://mystifying-goldwasser-a43885.netlify.com/">Live Demo</a>
                </div>
              </div>



            </div>

            <div className="card">
              <div className="face face--1">
                <div className="content">
                  <Img  alt="Nasa"
                        fluid={props.data.discover_mars.childImageSharp.fluid} />
                </div>
              </div>
              <div className="face face--2">
                <div className="content">
                  <p>Search Mars rover pictures by date through NASA's API using the Axios library.</p>
                  <p>Made With: React, HTML5, CSS3, Javascript, Axios, NASA API, Context API, React Hooks</p>
                  <a href="https://github.com/arthurCreek/nasaapi">Github</a>
                  <a href="https://wizardly-yalow-390819.netlify.com/">Live Demo</a>
                </div>
              </div>

            </div>

            <div className="card">
              <div className="face face--1">
                <div className="content">
                  <Img  alt="Nexfit"
                        fluid={props.data.nexfit.childImageSharp.fluid} />
                </div>
              </div>
              <div className="face face--2">
                <div className="content">
                  <p>Top notch insulated outerwear ecommerce business.  Server Side Rendered application using NextJS.</p>
                  <p>Made With: NextJS, Node, ContextAPI, React Hooks</p>
                  <a href="https://github.com/arthurCreek/nexfit">Github</a>
                  <a href="https://nexfit.herokuapp.com/">Live Demo</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>




      {/**************************
        **** My Skills Section ******
      ***************************/}
      <section className="section my-skills" id="section-my-skills">
        <div className="my-skills__container">

          <p className="skills">WHAT I CAN DO</p>
          <h1>MY SKILLS</h1>

          <div className="my-skills__item-container">
            <div className="my-skills__card">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.code_icon.childImageSharp.fluid} />
              </div>
              <div className="my-skills__card-title">
                <h2>The Basics</h2>
              </div>
              <p><span className="skill-title">HTML5</span></p>
              <p><span className="skill-title">CSS3: </span>Flexbox, Grid, Animations, BEM</p>
              <p><span className="skill-title">Preprocessors: </span>Sass</p>
              <p><span className="skill-title">CSS Frameworks: </span>Bootstrap, MaterialUI, etc.</p>
            </div>

            <div className="my-skills__card my-skills__card--javascript">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.js_icon.childImageSharp.fluid} />
              </div>
              <div className="my-skills__card-title">
                <h2>Javascript</h2>
              </div>

              <div className="javascript-content-container">
                <div className="javascript-content">
                  <p>Control Flow</p> 
                  <p>Error Handling</p>
                  <p>Data Models</p>
                  <p>Asynchronity</p>
                  <p>DOM Manipulation</p>
                </div>
                
                <div className="javascript-content">
                  <p>Functional Programming</p>
                  <p>OOP</p>
                  <p>MVC/MVVM...</p>
                  <p>And many more!</p>
                </div>
              </div>

            </div>

            <div className="my-skills__card">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.react_icon.childImageSharp.fluid} />
              </div>

              <div className="my-skills__card-title">
                <h2>Front End Frameworks</h2>
              </div>
              <p><span className="skill-title">ReactJS: </span>A Javascript library for building user interfaces</p>
              <p><span className="skill-title">GatsbyJS: </span>A blazing fast static site generator for React, used for Client Side Rendering</p>
              <p><span className="skill-title">NextJS: </span>Write server-rendered React apps easily</p>
            </div>

            <div className="my-skills__card">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.database_icon.childImageSharp.fluid} />
              </div>
              <div className="my-skills__card-title">
                <h2>Back End / State Management</h2>
              </div>
              <p><span className="skill-title">JS Backend: </span>Node.js, Express, Web APIs</p>
              <p><span className="skill-title">Database: </span>MySQL, MongoDB, Firebase</p>
              <p><span className="skill-title">React: </span>Context API, React Hooks, Redux</p>
              <p><span className="skill-title">Vanilla: </span>Props, localStorage</p>
            </div>

            <div className="my-skills__card">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.tools_icon.childImageSharp.fluid} />
              </div>
              <div className="my-skills__card-title">
                <h2>Build Tools</h2>
              </div>
              <p><span className="skill-title">Package Managers: </span>NPM, Yarn</p>
              <p><span className="skill-title">Tools: </span>Webpack, Babel, dotenv, live-server</p>
            </div>

            <div className="my-skills__card">
              <div className="my-skills__card-icon">
                <Img  alt="Code Icon"
                      className="skill_icon_img"
                      fluid={props.data.optimize_icon.childImageSharp.fluid} />
              </div>
              <div className="my-skills__card-title">
                <h2>Optimization</h2>
              </div>
              <p><span className="skill-title">Images: </span>Image Optimization</p>
              <p><span className="skill-title">Checklist: </span>Cross-Browser/Platform Testing, Accessibility, Mobile Web Performance, Auditing, many more</p>
            </div>

          </div>
        </div>
      </section>


      {/**************************
        **** About Me Section ******
      ***************************/}
      <section className="section about-me" id="section-about-me">
        <div className="about-me__container">

          <div className="about-me__title">
            <p>WHO I AM</p>
            <h1>ABOUT ME</h1>
          </div>

          <div className="about-me__content-container">

            <div className="about-me__content-container--img">
                <Img  alt="About me image"
                      fluid={props.data.about_me.childImageSharp.fluid} />
            </div>

            <div className="about-me__content-container--text">
              <p>I've always sought out opportunities and challenges that are meaningful to me.  As a web developer, I enjoy every aspect of every project from 
              the idea to the finished product.  I love to make things, together with my mission-driven work ethic, I'm excited to make a meaningful impact in 
              the world and at a great company.</p>
            </div>

          </div>

        </div>
      </section>


      {/**************************
        **** Contact Me Section ******
      ***************************/}
      <section className="section contact-me" id="section-contact">
        <div className="contact-me__container">

          <div className="contact-me__title">
            <p>REACH OUT</p>
            <h1>CONTACT ME</h1>
          </div>

          <div className="contact-me__form-container">
            <div className="contact-me__card-icon">
              <Img  alt="Code Icon"
                    className="skill_icon_img"
                    fluid={props.data.mail.childImageSharp.fluid} />
            </div>
            <form name="contact" method="POST" data-netlify="true">

              <div className="contact-me__name-input-container">
                <p>
                  <label><input type="text" name="name" placeholder="Name" className="form-input" /></label>   
                </p>
                <p>
                  <label><input type="email" name="email" placeholder="Email Address" className="form-input"/></label>
                </p>
              </div>

              <p>
                <label><textarea name="message" placeholder="Write A Message" className="contact-me__form-message"></textarea></label>
              </p>
              <p>
                <button type="submit" className="contact-me__send">Send</button>
              </p>
            </form>
          </div>
        </div>
      </section>


      {/**************************
        **** Footer Section ******
      ***************************/}
      <section className="section footer">
        <div className="footer__container">
          <div className="footer__social">
            <div className="footer__social-icon-container">
              <a href="https://www.linkedin.com/in/arthurcreek/">
                <Img  alt="Code Icon"
                    className="footer__social--icon"
                    fluid={props.data.linkedin.childImageSharp.fluid} />
              </a>
            </div>

            <div className="footer__social-icon-container">
              <a href="https://github.com/arthurCreek">
                <Img  alt="Code Icon"
                      className="footer__social--icon"
                      fluid={props.data.github.childImageSharp.fluid} />
              </a>
            </div>
          </div>

          <div className="footer__name">
            <p>Arturo Arroyo <span className="contact-me__copyright">&copy;2020</span></p>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage

/**************************
**** Receive fluid images through graphql ******
***************************/
export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    gatsby_detailing: file(relativePath: { eq: "gatsby.jpg" }) {
      ...fluidImage
    }
    discover_mars: file(relativePath: { eq: "discover_mars.jpg" }) {
      ...fluidImage
    }
    nexfit: file(relativePath: { eq: "nexfit.jpg" }) {
      ...fluidImage
    }
    code_icon: file(relativePath: { eq: "code_icon.png" }) {
      ...fluidImage
    } 
    js_icon: file(relativePath: { eq: "js_icon.png" }) {
      ...fluidImage
    } 
    react_icon: file(relativePath: { eq: "react_icon.png" }) {
      ...fluidImage
    } 
    database_icon: file(relativePath: { eq: "database_icon.png" }) {
      ...fluidImage
    } 
    tools_icon: file(relativePath: { eq: "tools_icon.png" }) {
      ...fluidImage
    } 
    optimize_icon: file(relativePath: { eq: "optimize_icon.png" }) {
      ...fluidImage
    } 
    about_me: file(relativePath: { eq: "hero.jpg" }) {
      ...fluidImage
    } 
    mail: file(relativePath: { eq: "mail.png" }) {
      ...fluidImage
    } 
    linkedin: file(relativePath: { eq: "linkedin.png" }) {
      ...fluidImage
    } 
    github: file(relativePath: { eq: "github.png" }) {
      ...fluidImage
    } 
    menu_icon: file(relativePath: { eq: "menu_icon.png" }) {
      ...fluidImage
    } 
    arturo: file(relativePath: { eq: "arturo.png" }) {
      ...fluidImage
    } 
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js';
import Typical from 'react-typical';
import '../styles/styles.scss'

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

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
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

    <section className="section my-works">
      <div className="my-works__container">
        <div className="about-me-card">
          <p>Card here</p>
        </div>
        <h1>My Works</h1>
        <div className="my-works__item-container">

          <div className="card">
            <div className="face face--2">
              <div className="content">
                <p>Detail your car by the best in the business.</p>
                <p>Made With: GatsbyJS, HTML5, CSS3</p>
                <a href="#">Github</a>
                <a href="#">Live Demo</a>
              </div>
            </div>
            <div className="face face--1">
              <div className="content">
                <Img  alt="Gatsby"
                      fluid={props.data.gatsby_detailing.childImageSharp.fluid} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face--2">
              <div className="content">
                <p>Search Mars rover pictures by date through NASA's API.</p>
                <p>Made With: React, HTML5, CSS3, Javascript, NASA API, Context API, React Hooks</p>
                <a href="#">Github</a>
                <a href="#">Live Demo</a>
              </div>
            </div>
            <div className="face face--1">
              <div className="content">
                <Img  alt="Nasa"
                      fluid={props.data.discover_mars.childImageSharp.fluid} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face--2">
              <div className="content">
                <p>Top notch insulated outerwear ecommerce business.</p>
                <p>Made With: NextJS, Node, ContextAPI, React Hooks</p>
                <a href="#">Github</a>
                <a href="#">Live Demo</a>
              </div>
            </div>
            <div className="face face--1">
              <div className="content">
                <Img  alt="Nexfit"
                      fluid={props.data.nexfit.childImageSharp.fluid} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="section my-skills">
      <div className="my-skills__container">
        <h1>My Skills</h1>

        <div className="my-skills__item-container">
          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>The Basics</h2>
            </div>
            <p><span className="skill-title">HTML5</span></p>
            <p><span className="skill-title">CSS3: </span>Flexbox, Grid, Animations, BEM</p>
            <p><span className="skill-title">Preprocessors: </span>Sass</p>
            <p><span className="skill-title">CSS Frameworks: </span>Bootstrap, MaterialUI, etc.</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Javascript</h2>
            </div>
            <p>ES5, ES6, ES7, ES8</p>
            <p><span className="skill-title">Fundamentals: </span>Control Flow, Error Handling, Data Models, Asynchronity, DOM Manipulation, Functional Programming, OOP, MVC/MVVM etc...</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Front End Frameworks</h2>
            </div>
            <p><span className="skill-title">ReactJS: </span>A Javascript library for building user interfaces</p>
            <p><span className="skill-title">GatsbyJS: </span>A blazing fast static site generator for React, used for Client Side Rendering</p>
            <p><span className="skill-title">NextJS: </span>Write server-rendered React apps easily</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>State Management</h2>
            </div>
            <p>Context API, React Hooks</p>
            <p>React Redux</p>
            <p>Props, localStorage</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Build Tools</h2>
            </div>
            <p>Node Package Manager (NPM)</p>
            <p>Yarn</p>
            <p>Webpack</p>
            <p>Babel</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Back End</h2>
            </div>
            <p>Node.js, Express, Web APIs</p>
            <p>MySQL, MongoDB, Firebase</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Optimization</h2>
            </div>
            <p>Image Optimization</p>
            <p>Cross-Browser/Platform Testing, Accessibility, Mobile Web Performance</p>
          </div>

          <div className="my-skills__card">
            <div className="my-skills__card-title">
              <h2>Additional</h2>
            </div>
            <p>If you are interested and have time, please feel free to check out my github 
            to review my code which may include skills not on here, as well as previous Android Development Projects</p>

          </div>

        </div>
      </div>
    </section>


    <section className="section about-me">
      <div className="about-me__container">
        <h1>About Me</h1>
        <p>This is the about me section</p>
      </div>
    </section>

    <section className="section contact-me">
      <div className="contact-me__container">
        <h1>Contact Me</h1>
        <p>This is the contact me section</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

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
  }
`

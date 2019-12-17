import React from "react"
import { Link } from "gatsby"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/*
    <div className="hero">
      <div className="hero__text-box" id="hero__main-text">
        <h1 className="hero-primary">
          <span className="hero-primary--main">Gatsby Detailing</span>
          <span className="hero-primary--sub">We love your car as much as you do</span>
        </h1>

        <a href="#section-popular" className="btn btn--white btn--animated">Discover Our Services</a>
      </div>
    </div>
    */}
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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import React, { Fragment } from 'react'
import Slide from 'components/slide'
import terminal from 'assets/terminal.jpg'


const Info = () => (
  <Fragment>
    <h1 className="ma0 pt5">BLOOMBERG, LP</h1>
    <hr className="w-50" />
    <h2 className="mb0">Aaron Cordova</h2>
    <div>Senior Front End Engineer</div>
  </Fragment>
)

const Technologies = () => (
  <Fragment>
    <Info />
    <div className="df justify-center">
      <ul className="tl">
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
      <ul className="tl ml8">
        <li>Webpack</li>
        <li>Babel</li>
        <li>Jest</li>
        <li>Enzyme</li>
      </ul>
    </div>
  </Fragment>
)

const Bloomberg = () => (
  <Slide
    steps={[Info, Technologies]}
    className="bg-image tc f-3rem"
    wrapper="relative z1"
    style={{backgroundImage: `url(${terminal})`}}
  />
)

export default Bloomberg

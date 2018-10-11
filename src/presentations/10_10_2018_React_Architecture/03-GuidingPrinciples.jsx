import React, { Fragment } from 'react'
import Slide from 'components/slide'
import guidance from 'assets/guidance.jpg'


const One = () => <h1 className="mt0 pb2 bb-1px">Guiding Principles</h1>

const Li1 = ({ show }) => (
  <li>
    <h2 className="mv0">Simplicity > complexity</h2>
    <ul className={show ? undefined : "o-0"}>
      <li>Intuitive</li>
      <li>Obvious</li>
      <li>Explained in a tweet</li>
    </ul>
  </li>
)

const Li2 = ({ show }) => (
  <li>
    <h2 className="mv0">Justify complexity</h2>
    <ul className={show ? undefined : "o-0"}>
      <li>What is the value add?</li>
      <li>Time vs knowledge</li>
      <li>Leave a trail of comment breadcrumbs</li>
    </ul>
  </li>
)

const Two = () => (
  <Fragment>
    <One />
    <ul>
      <Li1 />
    </ul>
  </Fragment>
)

const Three = () => (
  <Fragment>
    <One />
    <ul>
      <Li1 show />
    </ul>
  </Fragment>
)


const Four = () => (
  <Fragment>
    <One />
    <ul>
      <Li1 show />
      <Li2 />
    </ul>
  </Fragment>
)

const Five = () => (
  <Fragment>
    <One />
    <ul>
      <Li1 show />
      <Li2 show />
    </ul>
  </Fragment>
)

const Principles = () => (
  <Slide
    steps={[One, Two, Three, Four, Five]}
    className="bg-image f-3rem pa5"
    wrapper="relative z1"
    style={{backgroundImage: `url(${guidance})`}}
  />
)

export default Principles

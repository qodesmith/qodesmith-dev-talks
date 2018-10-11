import React, { Fragment } from 'react'
import Slide from 'components/slide'
import blueprint from 'assets/blueprint.jpg'


const One = () => <h1 className="mt0 mb3 pb2 bb-1px">2 Architecture Types</h1>

const Feature = ({ show, opinion }) => (
  <Fragment>
    <li>
      <h2 className="ma0">Feature based</h2>
      <ul className={show ? undefined : 'o-0'}>
        <li>Good for larger projects & scales well</li>
        <li>Each folder contains all redux things</li>
        <li className={opinion ? 'red' : 'o-0'}>Can get overcomplicated</li>
        <li className={opinion ? 'red' : 'o-0'}>Many nested folders</li>
      </ul>
    </li>
  </Fragment>
)

const Fxn = ({ show, opinion }) => (
  <Fragment>
    <li>
      <h2 className="mb0 mt2">Function based</h2>
      <ul className={show ? undefined : 'o-0'}>
        <li>Good for smaller projects</li>
        <li>Each redux piece in its own folder</li>
        <li className={opinion ? 'green' : 'o-0'}>Easy to remain consistent</li>
        <li className={opinion ? 'green' : 'o-0'}>WYSIWYG folders</li>
      </ul>
    </li>
  </Fragment>
)

const Two = () => (
  <Fragment>
    <One />
    <ul className="mb0">
      <Feature />
    </ul>
  </Fragment>
)

const Three = () => (
  <Fragment>
    <One />
    <ul className="mb0">
      <Feature />
      <Fxn />
    </ul>
  </Fragment>
)

const Four = () => (
  <Fragment>
    <One />
    <ul className="mb0">
      <Feature show />
      <Fxn show />
    </ul>
  </Fragment>
)

const Five = () => (
  <Fragment>
    <One />
    <ul className="mb0">
      <Feature show opinion />
      <Fxn show opinion />
    </ul>
  </Fragment>
)

const ArchitectureTypes = () => (
  <Slide
    steps={[One, Two, Three, Four, Five]}
    className="bg-image f-2-7rem ph5"
    wrapper="relative z1"
    style={{backgroundImage: `url(${blueprint})`}}
  />
)

export default ArchitectureTypes

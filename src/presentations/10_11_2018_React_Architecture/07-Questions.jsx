import React, { Fragment } from 'react'
import Slide from 'components/slide'
import easyButton from 'assets/easyButton.jpg'
import reaper from 'assets/reaper.png'
import kevin from 'assets/kevin.jpg'
import wheresWaldo from 'assets/wheresWaldo.jpg'
import ramp from 'assets/ramp.jpg'
import ReactLogo from 'components/svg/ReactLogo'


const H1 = () => <h1 className="mv0 mb3 pb2 bb-1px">Questions I Ask</h1>

const One = () => (
  <Fragment>
    <H1 />
    <h2 className="mt3 mb0">Is this intuitive?</h2>
  </Fragment>
)

const Two = () => (
  <Fragment>
    <One />
    <div className="tc">
      <img src={easyButton}/>
    </div>
  </Fragment>
)

const Three = () => (
  <Fragment>
    <One />
    <div className="tc">
      <img src={reaper} style={{width: '100%'}}/>
    </div>
  </Fragment>
)

const Four = () => (
  <Fragment>
    <H1 />
    <h2 className="mt3 mb0">How would a junior dev <ReactLogo width="100px" /> to this?</h2>
    <div className="tc">
      <img src={kevin} style={{width: '500px'}} />
    </div>
  </Fragment>
)

const Five = () => (
  <Fragment>
    <H1 />
    <h2 className="mt3 mb0">How easy is it to find things?</h2>
    <div className="tc">
      <img src={wheresWaldo} style={{height: '100%'}} />
    </div>
  </Fragment>
)

const Six = () => (
  <Fragment>
    <H1 />
    <h2 className="mt3 mb0">How would this affect ramp-up time?</h2>
    <div className="tc">
      <img src={ramp} style={{width: '60%'}} />
    </div>
  </Fragment>
)

const Questions = () => <Slide steps={[One, Two, Three, Four, Five, Six]} className="f-3rem ph5" />

export default Questions

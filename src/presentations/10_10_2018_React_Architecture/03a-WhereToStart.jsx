import React, { Fragment } from 'react'
import Slide from 'components/slide'
import dansTweet from 'assets/dansTweet.png'
import optionOverload from 'assets/optionOverload.jpg'


const H1 = () => <h1 className="mt0 mb3 pb2 bb-1px">Where To Start?</h1>

const Tweet = ({ show }) => (
  <Fragment>
    <div className={show ? 'tc mt5 b' : 'o-0 mt5'}>#Simplicity</div>
    <div className="tc mt5">
      <img src={dansTweet} className="o-90 dib overflow-h" style={{borderRadius: '30px'}} />
    </div>
  </Fragment>
)

const Two = () => (
  <Fragment>
    <H1 />
    <Tweet />
  </Fragment>
)

const Three = () => (
  <Fragment>
    <H1 />
    <Tweet show />
  </Fragment>
)


const WhereToStart = () => (
  <Slide
    steps={[H1, Two, Three]}
    className="bg-image f-3rem pa5"
    wrapper="relative z1"
    style={{backgroundImage: `url(${optionOverload})`}}
  />
)

export default WhereToStart

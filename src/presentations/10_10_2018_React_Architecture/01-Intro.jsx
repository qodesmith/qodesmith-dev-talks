import React, { Fragment } from 'react'
import Slide from 'components/slide'
import cn from 'helpers/cn'
import quest from 'assets/quest.jpg'
import mta from 'assets/mta.jpg'
import developer from 'assets/developer.jpg'


const H1 = () => <h1 className="mv1">Hi, I'm Aaron</h1>

const Images = ({ num }) => (
  <Fragment>
    <div className="dib intro-img">
      <img src={quest} width="100%" className={cn('mt6', { dn: !num })} />
    </div>
    <div className="dib intro-img">
      <img src={mta} width="100%" className={cn('mt6', { dn: num <= 1 })} />
    </div>
    <div className="dib intro-img">
      <img src={developer} width="100%" className={cn('mt6', { dn: num <= 2 })} />
    </div>
  </Fragment>
)

const Catchphrase = () => (
  <Fragment>
    <div className="fw1">
      <div>I went from rapping on tracks,</div>
      <div>to working on tracks,</div>
      <div>
        to <span className="i fw4 awesomeness">JavaScript Awesomeness</span><span className="f-0-6em">™</span>
      </div>
    </div>
  </Fragment>
)

const One = () => (
  <Fragment>
    <H1 />
    <Images num={0} />
  </Fragment>
)

const Two = () => (
  <Fragment>
    <H1 />
    <Catchphrase />
    <Images num={1} />
  </Fragment>
)

const Three = () => (
  <Fragment>
    <H1 />
    <Catchphrase />
    <Images num={2} />
  </Fragment>
)

const Four = () => (
  <Fragment>
    <H1 />
    <Catchphrase />
    <Images num={3} />
  </Fragment>
)

const Intro = () => (
  <Slide
    steps={[One, Two, Three, Four ]}
    className="tc f-3rem"
    cb={() => window.scrollTo(0, document.body.scrollHeight)}
  />
)

export default Intro

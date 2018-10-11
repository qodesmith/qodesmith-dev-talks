import React, { Fragment } from 'react'
import Slide from 'components/slide'


const H1 = () => <h1 className="mt0 mb3 pb2 bb-1px">Feature Based Architecture</h1>

const Example1 = ({ show, show2, hideOutline, components }) => (
  <div className="lh-1-4 f-2rem">
    <div className={components ? 'ph6 gray-dash dt' : 'dn'}>
      components/
      <div className="pl6">
        TwitterFeed/
        <div className="pl6">...</div>
      </div>
    </div>
    <div className="pl6">
      routes/
      <Blog show={show} show2={show2} hideOutline={hideOutline} />
      <div className="pl6">contact/</div>
      <div className="pl6">post/</div>
    </div>
    <div className="pl6">api/</div>
    <div className="pl6">...</div>
  </div>
)

const TwitterFeed = ({ show2 }) => (
  <div className={show2 ? 'pl6 b' : 'dn'}>
    TwitterFeed/
    <div className="pl6">TwitterFeed.jsx</div>
    <div className="pl6">twitterFeedActions.jsx</div>
    <div className="pl6">twitterFeedReducer.js</div>
    <div className="pl6">twitterFeedMiddleware.js</div>
    <div className="pl6">twitterFeed.css</div>
  </div>
)

const Blog = ({ hideOutline, show, show2 }) => (
  <div className={`ph6 dt ${hideOutline ? '' : 'gray-dash'}`}>
    blog/
    <div className={show ? (show2 ? '' : 'b') : 'dn'}>
      <div className="pl6">Blog.jsx</div>
      <div className="pl6">blogActions.js</div>
      <div className="pl6">blogReducer.js</div>
      <div className="pl6">blogMiddleware.js</div>
      <div className="pl6">blog.css</div>
      <TwitterFeed show2={show2} />
    </div>
  </div>
)

const One = () => (
  <Fragment>
    <H1 />
    <Example1 />
  </Fragment>
)

const Two = () => (
  <Fragment>
    <H1 />
    <Example1 show />
  </Fragment>
)

const Three = () => (
  <Fragment>
    <H1 />
    <Example1 show show2 />
  </Fragment>
)

const Four = () => (
  <Fragment>
    <H1 />
    <Example1 hideOutline components />
  </Fragment>
)

const Five = () => (
  <Fragment>
    <H1 />
    <Example1 hideOutline components />
  </Fragment>
)

const Feature = () => <Slide steps={[One, Two, Three, Four, Five]} className="f-3rem pa5" />

export default Feature

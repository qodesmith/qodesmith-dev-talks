import React, { Fragment } from 'react'
import Slide from 'components/slide'


const One = () => (
  <Fragment>
    <h1 className="mt0 mb3 pb2 bb-1px">Function Based Architecture</h1>
    <div className="pl6">api/</div>
    <div className="pl6">components/</div>
    <div className="pl6">styles/</div>
    <div className="pl6">
      utils/
      <div className="pl6">actions/</div>
      <div className="pl6">helpers/</div>
      <div className="pl6">middleware/</div>
      <div className="pl6">reducers/</div>
    </div>
  </Fragment>
)

const Fxn = () => <Slide steps={[One]} className="f-3rem pa5" />

export default Fxn

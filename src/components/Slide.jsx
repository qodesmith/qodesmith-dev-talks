import React, { Component } from 'react'
import cn from 'helpers/cn'


class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0 }
    document.addEventListener('keyup', this.listener)
  }

  listener = e => {
    // Spacebar advances the steps.
    if (e.which === 32) {
      if (this.state.step === this.props.steps.length - 1) return
      this.setState(({ step }) => ({ step: step + 1 }))
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener)
  }

  componentDidUpdate() {
    this.props.cb && this.props.cb()
  }

  render() {
    const { className, steps, style, wrapper } = this.props
    const cls = cn({ [className]: className })
    const Content = steps[this.state.step]

    return (
      <div className={cls} style={style || undefined}>
        { wrapper ? <div className={wrapper}><Content /></div> : <Content /> }
      </div>
    )
  }
}

export default Slide

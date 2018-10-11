import React, { Component, Fragment } from 'react'
import slides from 'presentations/10_10_2018_React_Architecture'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, slide: 0 }

    // Event listener to control the slides
    document.addEventListener('keyup', e => {
      if (e.which === 37) this.prior()
      if (e.which === 39) this.next()
    })
  }

  // React error handling!
  componentDidCatch(error) {
    this.setState({ error })
    console.log(error)
  }

  prior() {
    const { slide } = this.state
    if (slide === 0) return

    this.setState({ slide: slide - 1 })
  }

  next() {
    const { slide } = this.state
    if (slide === slides.length - 1) return

    this.setState({ slide: slide + 1 })
  }

  renderError() {
    return (
      <div className='w-50 w-100-m ph3'>
        <h2>Uh oh!</h2>
        <p>Looks like the client has encountered a problem.</p>
        <p>
          Please refresh your browser and try again.
          If this issue persists, scream and run around like you're on fire.
          Or, check the console and see what was logged. I mean either one is fine.
        </p>
      </div>
    )
  }

  render() {
    if (!slides.length) return 'No slides yet...'
    const CurrentSlide = slides[this.state.slide]

    /*
      Adding a unique key each render forces the component to re-mount &
      go through the full lifecyle. If we didn't do that, the `steps` prop in
      each <Slide> component would carry over from the previous slide.
    */
    return <CurrentSlide key={Date.now()} />
  }
}

export default App

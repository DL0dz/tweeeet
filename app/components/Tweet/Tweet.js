import React from 'react'
import styles from './Tweet.css'

const Tweet = React.createClass({
  getInitialState () {
    return {
      tweet: ''
    }
  },
  handleUpdateText (e) {
    this.setState({
      tweet: e.target.value
    })
  },
  handleSendTweet (e) {
    e.preventDefault()
    if (this.state.tweet.length > 140) return
    // send tweet
    console.log(this.state.tweet)
  },
  render () {
    const moreThan140Chars = 140 - this.state.tweet.length < 0
    return (
      <form action='' className={styles.tweet} >
        <div className={styles.contentArea} >
          <textarea
            className={styles.textarea}
            onChange={this.handleUpdateText}
            cols='30'
            rows='10'
            autoFocus >
          </textarea>
          <span
            className={moreThan140Chars ? styles.counterRed : styles.counter} >
              {140 - this.state.tweet.length}
          </span>
        </div>
        <button
          className={moreThan140Chars ? styles.lockedButton : styles.sendButton}
          onClick={this.handleSendTweet} >
          Tweet
        </button>
      </form>
    )
  }
})

export default Tweet

import React from 'react'
import styles from './Hello.css'

const Hello = React.createClass({
  render () {
    return <p className={styles.hello} >Hello world !</p>
  }
})

export default Hello

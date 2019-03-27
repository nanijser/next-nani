import React from 'react'
import styles from "./index.less"
import Link from 'next/link'

class About extends React.Component {

  render() {
    return (
      <>
        <p className={styles.red}>AboutAboutAbout</p>
        <Link href="/contact">
          <div className={styles.btn}>跳转</div>
        </Link>
      </>
    )
  }
}
export default About

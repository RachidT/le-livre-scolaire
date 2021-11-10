import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.Container}>
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>Easy Class</div>
      <div className={styles.HeaderRight}>Rachid Tlemsani</div>
    </div>
  </div>
)

export default Header

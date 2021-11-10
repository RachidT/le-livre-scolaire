import React, { ReactNode } from 'react'
import cx from 'classnames'
import styles from './Modal.module.scss'

const Footer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx(className, styles.Footer)}>
    <div>{children}</div>
  </div>
)

export default Footer

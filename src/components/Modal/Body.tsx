import React, { ReactNode } from 'react'
import cx from 'classnames'
import styles from './Modal.module.scss'

const Body = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx(className, styles.Body)}>{children}</div>
)

export default Body

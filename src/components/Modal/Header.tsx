import React, { ReactNode } from 'react'
import cx from 'classnames'
import styles from './Modal.module.scss'

const Header = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx(className, styles.Header)}>{children}</div>
)

export default Header

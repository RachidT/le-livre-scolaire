import React, { ReactNode } from 'react'
import cx from 'classnames'

import styles from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Icon
   */
  icon?: ReactNode
  classes?: {
    root?: string
    input?: string
    icon?: string
  }
  value?: string
}

const Input = React.forwardRef((props: Props, ref?: any) => {
  const { className, classes = {}, type = 'text', icon, value, ...othersProps } = props
  return (
    <div className={classes.root}>
      <input
        ref={ref}
        type={type}
        className={cx(styles.Input, classes.input, { [styles.InputIcon]: icon })}
        value={value}
        {...othersProps}
        autoComplete="off"
      />
      {icon && <div className={cx(classes.icon)}>{icon}</div>}
    </div>
  )
})

export default Input

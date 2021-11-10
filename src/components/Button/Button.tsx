import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import cx from 'classnames'

const BUTTON_TYPE = {
  silence: 'silence',
  primary: 'primary',
  success: 'success',
  disable: 'disable',
  secondary: 'secondary',
  small: 'small',
  successSecondary: 'successSecondary',
  danger: 'danger',
}

interface Props {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  buttonType: 'silence' | 'primary' | 'success' | 'disable' | 'secondary' | 'danger'
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ children, onClick, className, buttonType, disabled, type = 'button' }: Props) => {
  const buttonClass = cx(styles.Button, className, {
    [styles.Silence]: buttonType === BUTTON_TYPE.silence,
    [styles.Primary]: buttonType === BUTTON_TYPE.primary,
    [styles.Success]: buttonType === BUTTON_TYPE.success,
    [styles.Danger]: buttonType === BUTTON_TYPE.danger,
    [styles.SuccessDisable]: buttonType === BUTTON_TYPE.success && disabled,
    [styles.Secondary]: buttonType === BUTTON_TYPE.secondary,
    [styles.SecondaryDisable]: buttonType === BUTTON_TYPE.secondary && disabled,
    [styles.Disable]: buttonType === BUTTON_TYPE.disable,
  })

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

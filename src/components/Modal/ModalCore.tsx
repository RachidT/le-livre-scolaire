import React, { ReactNode, useEffect, useRef } from 'react'
import { MdClose } from 'react-icons/md'
import styles from './Modal.module.scss'
import cx from 'classnames'

export interface ModalProps {
  children: ReactNode
  open: boolean
  className?: string
  onRequestClose: any
}

const ModalCore = ({ children, onRequestClose, open, className }: ModalProps) => {
  const background = useRef<HTMLDivElement | null>(null)
  const content = useRef<HTMLDivElement | null>(null)

  const onClick = (e: any) => {
    if (
      background.current &&
      content.current &&
      background.current.contains(e.target) &&
      !content.current.contains(e.target)
    ) {
      onRequestClose(e)
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  })

  if (!open) {
    return null
  }

  return (
    <div className={styles.Modal} ref={background}>
      <div className={cx(className, styles.Content)} ref={content}>
        <div
          role="button"
          onClick={onRequestClose}
          className={styles.CloseButton}
          tabIndex={0}
          aria-label="Modal close button"
        >
          <MdClose />
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalCore

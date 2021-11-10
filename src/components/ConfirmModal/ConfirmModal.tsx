import React, { FC, useEffect, useState } from 'react'
import { Button } from 'src/components'
import Modal from 'src/components/Modal'
import styles from './ConfirmModal.module.scss'

interface Props {
  isOpen: boolean
  title: string
  message: string
  onConfirmClick: Function
  onCancelClick?: Function
}

const ConfirmModal: FC<Props> = ({ isOpen, title, message, onConfirmClick, onCancelClick }) => {
  const [open, setOpen] = useState(false)

  const handleConfirmClick = () => {
    onConfirmClick && onConfirmClick()
    setOpen(false)
  }

  const handleCancelClick = () => {
    onCancelClick && onCancelClick()
    setOpen(false)
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Modal open={open} onRequestClose={handleCancelClick}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body className={styles.Body}>{message}</Modal.Body>
      <Modal.Footer className={styles.Footer}>
        <Button buttonType="secondary" className={styles.CancelButton} onClick={handleCancelClick}>
          <div>Cancel</div>
        </Button>
        <Button buttonType="primary" type="submit" onClick={handleConfirmClick}>
          <div>Confirm</div>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal

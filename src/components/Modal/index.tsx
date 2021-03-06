import React from 'react'
import { createPortal } from 'react-dom'
import ModalCore, { ModalProps } from './ModalCore'
import ModalFooter from './Footer'
import ModalBody from './Body'
import ModalHeader from './Header'

const Modal: React.FC<ModalProps> & {
  Footer: typeof ModalFooter
  Body: typeof ModalBody
  Header: typeof ModalHeader
} = (props) => createPortal(<ModalCore {...props} />, document.body)

Modal.Footer = ModalFooter
Modal.Body = ModalBody
Modal.Header = ModalHeader

export default Modal

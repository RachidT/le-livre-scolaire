import React from 'react'
import { FormValues } from '../AddStudent/AddStudent'
import { Form } from 'src/components'
import Modal from 'src/components/Modal'
import styles from './EditStudent.module.scss'
import { Students } from '../../StudentsList'

interface Props {
  values: FormValues
  edit: (value: any) => void
  setDisplayEditModal: (value: boolean) => void
}

const EditStudent = ({ values, edit, setDisplayEditModal }: Props) => {
  const submit = (values: FormValues) => {
    edit((prevState: Students[]) => [
      ...prevState.map((el) => (el.id === values.id ? { ...values } : el)),
    ])
    setDisplayEditModal(false)
  }

  const initialValues = {
    id: values.id,
    first_name: values.first_name,
    last_name: values.last_name,
    address: values.address,
    date_of_birth: values.date_of_birth,
    phone: values.phone,
    email: values.email,
  }

  return (
    <Modal open onRequestClose={() => setDisplayEditModal(false)}>
      <Modal.Header className={styles.FormHeader}>
        Modifier les informations de l'élève
      </Modal.Header>
      <Modal.Body className={styles.Form}>
        <Form initialValues={initialValues} submit={submit} />
      </Modal.Body>
    </Modal>
  )
}

export default EditStudent

import React from 'react'
import Modal from 'src/components/Modal'
import { Form } from 'src/components'
import styles from './AddStudent.module.scss'
import uniqueId from 'lodash/uniqueId'
import { Students } from '../StudentsList/StudentsList'

export type FormValues = {
  id: string
  first_name: string
  last_name: string
  address: string
  date_of_birth: string
  phone: string
  email: string
}

const AddStudent = ({
  setStudentsList,
  setDisplayAddStudentModal,
}: {
  setDisplayAddStudentModal: (value: boolean) => void
  setStudentsList: (value: any) => void
}) => {
  const submit = (values: Students) => {
    setStudentsList((prevState: Students[]) => [
      { ...values, id: uniqueId('student_') },
      ...prevState,
    ])
    setDisplayAddStudentModal(false)
  }

  const initialValues: FormValues = {
    id: '',
    first_name: '',
    last_name: '',
    address: '',
    date_of_birth: '',
    phone: '',
    email: '',
  }

  return (
    <div>
      <Modal open onRequestClose={() => setDisplayAddStudentModal(false)}>
        <Modal.Header className={styles.FormHeader}> ajouter un élève </Modal.Header>
        <Modal.Body className={styles.Form}>
          <Form initialValues={initialValues} submit={submit} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddStudent

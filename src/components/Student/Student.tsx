import React, { useState } from 'react'
import { Button, ConfirmModal, EditStudent } from 'src/components'
import { MdDelete } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import { Students } from '../StudentsList/StudentsList'
import styles from './Student.module.scss'

interface Props {
  student: Students
  deleteStudent: (id: string) => void
  setStudentsList: (value: Students[]) => void
}
const Student = ({ student, deleteStudent, setStudentsList }: Props) => {
  const [displayEditModal, setDisplayEditModal] = useState(false)
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false)

  return (
    <div className={styles.StudentWrapper}>
      <div className={styles.Student}>
        <BsPersonCircle className={styles.StudentIcon} />
        <span className={styles.Label}>Nom:</span>
        <span className={styles.Value}>{student.last_name}</span>
        <span className={styles.Label}>Prénom: </span>
        <span className={styles.Value}>{student.first_name}</span>
        <span className={styles.Label}>date de naissance: </span>
        <span className={styles.Value}>{student.date_of_birth}</span>
        <span className={styles.Label}>téléphone: </span>
        <span className={styles.Value}>{student.phone}</span>
        <span className={styles.Label}>email: </span>
        <span className={styles.Value}>{student.email}</span>
        <span className={styles.Label}>adresse: </span>
        <span className={styles.Value}>{student.address}</span>
      </div>
      <div className={styles.Icons}>
        <Button
          className={styles.IconsEdit}
          buttonType="secondary"
          onClick={() => setDisplayEditModal(true)}
        >
          <RiEdit2Fill />
        </Button>
        {displayEditModal && (
          <EditStudent
            edit={setStudentsList}
            values={student}
            setDisplayEditModal={setDisplayEditModal}
          />
        )}
        <Button buttonType="danger" onClick={() => setDisplayConfirmModal(true)}>
          <MdDelete />
        </Button>
        {displayConfirmModal && (
          <ConfirmModal
            isOpen={displayConfirmModal}
            title="Confirm"
            message="Êtes-vous sûr de vouloir supprimer cet élève ?"
            onConfirmClick={() => {
              deleteStudent(student.id)
              setDisplayConfirmModal(false)
            }}
            onCancelClick={() => setDisplayConfirmModal(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Student

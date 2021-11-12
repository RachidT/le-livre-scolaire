import React from 'react'
import { Student } from 'src/components'
import styles from './StudentsList.module.scss'

export type Students = {
  id: string
  first_name: string
  last_name: string
  address: string
  date_of_birth: string
  phone: string
  email: string
}

interface Props {
  students: Students[]
  searchBarValue: string
  deleteStudent: (id: string) => void
  setStudentsList: (value: Students[]) => void
}

const StudentsList = ({ students, searchBarValue, deleteStudent, setStudentsList }: Props) => {
  return (
    <div className={styles.Container}>
      {students
        .filter(
          (student) =>
            student.first_name.toUpperCase().includes(searchBarValue.toUpperCase()) ||
            student.last_name.toUpperCase().includes(searchBarValue.toUpperCase()) ||
            !searchBarValue.length,
        )
        .map((student) => (
          <Student
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
            setStudentsList={setStudentsList}
          />
        ))}
    </div>
  )
}

export default StudentsList

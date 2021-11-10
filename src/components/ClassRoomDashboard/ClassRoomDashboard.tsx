import React, { ChangeEvent, useState } from 'react'
import { StudentsList, SearchBar } from 'src/components'
import studentsData from 'src/data'
import { IoPersonAddOutline } from 'react-icons/io5'

import styles from './ClassRoomDashboard.module.scss'
import AddStudent from '../AddStudent/AddStudent'
import { Students } from '../StudentsList/StudentsList'

const ClassRoomDashboard = () => {
  const [studentsList, setStudentsList] = useState<Students[]>(studentsData)
  const [searchBarValue, setSearchBarValue] = useState('')
  const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value)
  }

  const deleteStudent = (id: string) => {
    const filterStudentList = studentsList.filter((student) => student.id !== id)
    setStudentsList(filterStudentList)
  }

  return (
    <div className={styles.classRoom}>
      <SearchBar searchBarValue={searchBarValue} handleChange={handleChange} />
      <div className={styles.title}>
        <h2>Elèves | 3EB</h2>
        <div className={styles.icon}>
          <IoPersonAddOutline onClick={() => setDisplayAddStudentModal(true)} />
          {displayAddStudentModal && (
            <AddStudent
              setDisplayAddStudentModal={setDisplayAddStudentModal}
              setStudentsList={setStudentsList}
            />
          )}
        </div>
      </div>
      <StudentsList
        students={studentsList}
        searchBarValue={searchBarValue}
        deleteStudent={deleteStudent}
        setStudentsList={setStudentsList}
      />
    </div>
  )
}

export default ClassRoomDashboard

import React from 'react'
import Header from 'src/components/Header/Header'
import ClassRoomDashboard from 'src/components/ClassRoomDashboard/ClassRoomDashboard'
import styles from './App.module.scss'

const App = () => (
  <div className={styles.App}>
    <Header />
    <ClassRoomDashboard />
  </div>
)

export default App

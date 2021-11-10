import uniqueId from 'lodash/uniqueId'

const studentsData = [
    {
      id: uniqueId("student_"),
      first_name: 'Samuel',
      last_name: 'Jackson',
      date_of_birth:'01/01/2002',
      address: 'Allée des Fruits, 75002 Paris',
      phone: '06.54.67.87.65',
      email: 'sam_jackson@gmail.com',
    },
    {
      id: uniqueId("student_"),
      first_name: 'John',
      last_name: 'Doe',
      address: 'rue du Ninja vert, 75010 Paris',
      date_of_birth:'23/02/1999',
      phone: '06.54.67.65.32',
      email: 'anonyme@yahoo.fr',
    },
    {
      id: uniqueId("student_"),
      first_name: 'Nicky',
      last_name: 'Larson',
      date_of_birth:'04/12/2000',
      address: 'rue des princesses, 75008 Paris',
      phone: '06.54.34.54.11',
      email: 'nicky@gmail.com',
    },
    {
      id: uniqueId("student_"),
      first_name: 'Jean',
      last_name: 'Lemoine',
      date_of_birth:'30/01/2005',
      address: '4 avenue des lumières, 75001 Paris',
      phone: '06.75.89.03.43',
      email: 'Jean_lemoine@gmail.com',
    },
    {
      id: uniqueId("student_"),
      first_name: 'Isaac',
      last_name: 'Newton',
      date_of_birth:'15/07/1997',
      address: '4 avenue des lumières, 75019 Paris',
      phone: '06.75.89.03.43',
      email: 'isaac@hotmail.fr',
    },
  ]
  
  export default studentsData
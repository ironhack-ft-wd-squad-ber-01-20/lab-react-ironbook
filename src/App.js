import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import Users from './components/Users'
import users from './Data/users.json'
import './App.css';

function App() {
  const [userList, setUserList] = useState(users)
  const [showUsers, setShowUsers] = useState([])
  const [isStudent, setIsStudent] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setShowUsers(userList)
  }, [userList])

  useEffect(() => {
    if (isStudent && !isTeacher) {
      let listStudents = userList.filter(contact => contact.role.includes('student'))
      return setShowUsers(listStudents)
    }
    if (isTeacher && !isStudent) {
      let listTeachers = userList.filter(contact => contact.role.includes('teacher'))
      return setShowUsers(listTeachers)
    }
    return setShowUsers(userList)

  }, [isStudent, isTeacher])

  const findContactByName = (event) => {
    event.preventDefault()
    const result = userList.filter(contact => contact.firstName.toLowerCase().includes(event.target.value.toLowerCase()))
    if (result) {
      return setShowUsers(result)
    }
  }

  return (
    <div className="App">
      <h1>Ironbook</h1>
      <SearchBar handlerOnchange={findContactByName} />
      <Filters title="Student"
        fnClick={() => setIsStudent(!isStudent)}
        checked={isStudent} />
      <Filters title="Teacher"
        fnClick={() => setIsTeacher(!isTeacher)}
        checked={isTeacher} />
      <Users users={showUsers} />
    </div>
  );
}

export default App;

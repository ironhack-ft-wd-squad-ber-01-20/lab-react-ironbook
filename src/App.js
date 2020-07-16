import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import FiltersCheckbox from './components/FiltersCheckbox'
import FilterSelect from './components/FilterSelect'
import Users from './components/Users'
import users from './Data/users.json'
import './App.css';

function App() {
  const [userList, setUserList] = useState(users)
  const [showUsers, setShowUsers] = useState([])
  const [isStudent, setIsStudent] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)
  const [campusList, setCampusList] = useState(false)
  const [inputText, setInputText] = useState('')
  const [setectedCampus, setSetectedCampus] = useState('')



  useEffect(() => {
    setShowUsers(userList)
  }, [userList, isTeacher, isStudent])

  useEffect(() => {
    setCampusList(createCampusListFromShowUsers())
  }, [showUsers])

  useEffect(() => {
    findContactByName()
  }, [inputText, isTeacher, isStudent])

  useEffect(() => {
    if (isStudent && !isTeacher) {
      let listStudents = showUsers.filter(contact => contact.role.includes('student') && contact.firstName.includes(inputText))
      return setUserList(listStudents)
    }
    if (isTeacher && !isStudent) {
      let listTeachers = showUsers.filter(contact => contact.role.includes('teacher') && contact.firstName.includes(inputText))
      return setUserList(listTeachers)
    }
    if (inputText.length <= 0) {
      setUserList(users)
    }
    return setUserList(users.filter(user => user.role.includes(inputText)))

  }, [isStudent, isTeacher])

  const createCampusListFromShowUsers = () => {
    return [... new Set(userList.map(({ campus }) => campus))]
  }

  const filterByCampus = (event) => {
    const result = userList.filter(({ campus }) => event.target.value != 'all' ? campus === event.target.value : campus)
    return setShowUsers(result)
  }

  const findContactByName = () => {
    if (inputText.length === 0) {
      return
    }
    const result = userList.filter(contact => contact.firstName.toLowerCase().includes(inputText.toLowerCase()))
    if (result) {
      return setShowUsers(result)
    }
  }

  return (
    <div className="App">
      <h1>Ironbook</h1>
      <SearchBar handlerOnchange={(event) => setInputText(event.target.value)} />
      <FiltersCheckbox title="Student"
        fnChange={() => setIsStudent(!isStudent)}
        checked={isStudent} />
      <FiltersCheckbox title="Teacher"
        fnChange={() => setIsTeacher(!isTeacher)}
        checked={isTeacher} />
      <FilterSelect title="Campus" options={campusList} handlerOnchange={filterByCampus} />
      <Users users={showUsers} />
    </div>
  );
}

export default App;

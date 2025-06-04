import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Header, Footer} from './components'
import {HomePage, BattleGrid, Calendarr, Login, AdminPage, Battle1x1, Role, CreateEventPage, EventPage, SignUp} from './pages'
import {useState} from "react";
function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/battles" element={<Battle1x1/>}/>
              <Route path="/battle/:id/grid" element={<BattleGrid/>}/>
              <Route path="/Calendar" element={<Calendarr/>}/>
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/role" element={<Role />} />
              <Route path="/createEvents" element={<CreateEventPage />} />
              <Route path="/event/:id" element={<EventPage />} />
          </Routes>
          <Footer/>

      </>
  )
}

export default App

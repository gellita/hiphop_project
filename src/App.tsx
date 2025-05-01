import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Header, Footer} from './components'
import {Timer, HomePage, BattleGrid, Calendarr, Login, AdminPage, Battle1x1, Role, CreateEventPage, EventPage} from './pages'
import {SignUp} from "./pages/SignUpPage/SignUp";
// import {useState} from "react"



function App() {


  return (


      <>
          {/*<Header reverse={reverse}/>*/}
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/battles" element={<Battle1x1/>}/>
              <Route path="/BattleGrid" element={<BattleGrid/>}/>
              <Route path="/Calendar" element={<Calendarr/>}/>
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/role" element={<Role />} />
              <Route path = "/events" element={<CreateEventPage />} />
              <Route path="/event/:id" element={<EventPage />} />
          </Routes>
          <Footer/>
      </>




  )
}

export default App

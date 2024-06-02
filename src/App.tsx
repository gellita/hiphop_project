import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Header, Footer} from './components'


import {Battle1x1, HomePage, BattleGrid, Calendar, Login, AdminPage} from './pages'
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
              <Route path="/Calendar" element={<Calendar/>}/>
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/login" element={<Login />} />
          </Routes>
          <Footer/>
      </>




  )
}

export default App

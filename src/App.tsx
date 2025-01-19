import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Header, Footer} from './components'



import {Timer, HomePage, BattleGrid, Calendarr, Login, AdminPage} from './pages'




function App() {

  return (


      <>
          {/*<Header reverse={reverse}/>*/}
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/battles" element={<Timer/>}/>
              <Route path="/BattleGrid" element={<BattleGrid/>}/>
              <Route path="/Calendar" element={<Calendarr/>}/>
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/login" element={<Login />} />
          </Routes>
          <Footer/>
      </>




  )
}

export default App

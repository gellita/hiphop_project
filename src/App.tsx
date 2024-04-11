import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Header,Footer} from './components'

import {Battle1x1} from './pages/index.ts'

function App() {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/battles" element={<Battle1x1/>}/>
        </Routes>
        <Footer/>


    </>

  )
}

export default App

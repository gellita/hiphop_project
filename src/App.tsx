import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Header,Footer} from './components'

import {Battle1x1} from './pages/index.ts'

function App() {

  return (
    <>
        <Header/>
        <Footer/>

        <Routes>
            <Route path="/battles" element={<Battle1x1/>}/>
        </Routes>
    </>

  )
}

export default App

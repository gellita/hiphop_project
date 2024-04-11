import './App.css'
import {Routes, Route,Link} from 'react-router-dom'
import {Header,Footer} from './components'

import {Battle1x1} from './pages/Battle1x1'

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

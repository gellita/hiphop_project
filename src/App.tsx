import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Header,Footer} from './components'

import {Battle1x1} from './pages/index.ts'
import {useState} from "react";

function App() {
    const [reverse, setReverse] = useState(false);

    const location = useLocation();

  return (
    <>
        <Header reverse={reverse}/>
        <Routes>
            <Route path="/battles" element={<Battle1x1/>}/>
        </Routes>
        <Footer/>


    </>

  )
}

export default App

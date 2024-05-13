import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Header,Footer} from './components'

import {Battle1x1, Calendar} from './pages'
// import {useEffect, useState} from "react";

function App() {

    // const [state, setState] = useState(null);
    //
    // const callBackendAPI = async () => {
    //     const response = await fetch('/express_backend');
    //     const body = await response.json();
    //
    //     if (response.status !== 200) {
    //         throw Error(body.message)
    //     }
    //     return body;
    // };
    //
    // // получение GET маршрута с сервера Express, который соответствует GET из server.js
    // useEffect(() => {
    //     callBackendAPI()
    //         .then(res => setState(res.express))
    //         .catch(err => console.log(err));
    // }, [])

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/battles" element={<Battle1x1/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
        <Footer/>
        {/*<div>*/}
        {/*    {state}*/}
        {/*</div>*/}

    </>

  )
}

export default App

import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Header, Footer} from './components'


import {Battle1x1, HomePage, BattleGrid, Calendar} from './pages'
// import {useState} from "react"


function App() {
    // const [reverse, setReverse] = useState(false);
    //
    // const location = useLocation();

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
          {/*<Header reverse={reverse}/>*/}
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/battles" element={<Battle1x1/>}/>
              <Route path="/BattleGrid" element={<BattleGrid/>}/>
              <Route path="/Calendar" element={<Calendar/>}/>

          </Routes>
          <Footer/>
      </>




  )
}

export default App

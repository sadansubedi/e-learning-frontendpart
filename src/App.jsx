import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/body/Body'
import Bsccsit from './components/bsc_csit/Bsccsit.JSX';
import Footer from './components/footer/Footer';
// import Iit from './components/chapters/IIT/Iit';
// import Iit from './components/bsc_csit/chapters/IIT/Iit';
// import Syllabus from './components/chapters/IIT/Syllabus';
import Syllabus from './components/bsc_csit/chapters/IIT/Syllabus';
import Chapter from './components/bsc_csit/chapters/IIT/Chapter';
import Lectures from './components/bsc_csit/chapters/IIT/Lectures';
import { Route, Routes,createBrowserRouter, Outlet,Navigate, RouterProvider } from "react-router-dom";
import Handwrittennotes from './components/bsc_csit/chapters/IIT/Handwrittennotes';
// import Example from "./components/Example"
import MyComponent from './components/Example';
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar/>
    <Routes>
            <Route exact path="/" Component={Body}/>
            <Route exact path="/csit" Component={Bsccsit}/>
            {/* <Route exact path="/csit/iit" Component={Iit}/> */}
            <Route exact path="csit/iit/syllabus" Component={Syllabus}/>
            <Route exact path="/csit/iit/chapter" Component={Chapter}/>
            <Route exact path="/csit/iit/lecture/" Component={Lectures}/>
            <Route exact path='/csit/iit/notes' Component={Handwrittennotes}/>
            {/* <Route exact path="/service" Component={Service}/>
            <Route exact path="/about" Component={About}/>
            <Route path="*" Component={NotFound} /> */}
      </Routes>
      <Footer/>
      <MyComponent/>

    </>
  )
}

export default App

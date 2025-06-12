import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import First from './First'
import './style.css'
import Salesapp from './Salesapp'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inspiration from './inspiration'
import LearninguseContent from './LearninguseContent'
import UniversityLostFound from './UniversityLostFound'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <First/>  */}
    {/* <Salesapp/> */}
    {/* <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter> */}
   {/* <Inspiration/> */}
   {/* <LearninguseContent/> */}
   <UniversityLostFound/>
   {/* <Lucid */}

  </StrictMode>,
)

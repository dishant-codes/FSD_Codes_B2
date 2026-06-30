import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Course from './Course.jsx'
import CoursePage from './CoursePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (<>
          <nav className='links'>
             <Link to="/">Home</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/course">Courses</Link>
             <Link to="/about">About</Link>
             <Link to="/login">Login</Link>
          </nav>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/course/' element={<CoursePage />} />
              <Route path='/course/:courseId' element={<Course />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
          </Routes> 
  </>
          
  )
}

export default App

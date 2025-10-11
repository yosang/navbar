import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import About from './About.jsx'
import Hobbies from './Hobbies.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/hobbies' element={<Hobbies />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
  </Routes>
  </BrowserRouter>,
)

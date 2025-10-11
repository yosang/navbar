// Import { createRoot } from react-dom/client as well as App.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './assets/main.css'

import Home from './pages/Home';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';

// Get the elementId of the div with id root
const root = document.getElementById('root')

// Render this element with createRoot
createRoot(root).render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/messaging' element={<Messaging />} />
        <Route path='/notifications' element={<Notifications />} />
    </Routes>   
    </BrowserRouter>
)
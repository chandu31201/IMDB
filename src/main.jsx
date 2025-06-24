import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route } from 'react-router';
import List from './pages/list.jsx';
import Details from './pages/details.jsx';
import Watchlist from './pages/watchlist.jsx';
import { Routes } from 'react-router';
import Header from './components/Header.jsx';

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <StrictMode>
      <Header/>
      <Routes>
        
        <Route path='/' element={<List />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>
        <Route path='/*' element={<h2>Error</h2>}></Route>

      </Routes>
    </StrictMode>
  </BrowserRouter>
)

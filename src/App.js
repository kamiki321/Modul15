import './App.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom'
import {Main} from './components/Main'
import { Details } from './components/Details'
import {Search} from './components/Search.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:isbn" element={<Details />}/>
        <Route path="/search/:judul" element={<Search />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

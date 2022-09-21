import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from './pages/start';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

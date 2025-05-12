import './App.css'
import Clock from './pages/Clock';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <div className="app flex h-full">
      <Routes>
        <Route path="/" element={<Clock />} />
      </Routes>
    </div>
    </>
  )
}

export default App

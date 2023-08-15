import {Routes, Route} from 'react-router-dom'
import {NotFound} from './pages/NotFound'
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {Bus} from './pages/Bus'

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bus" element={<Bus />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

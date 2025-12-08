import { HashRouter } from 'react-router'
import './App.css'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutMe/>}></Route>
    </Routes>
  </HashRouter>
}

export default App

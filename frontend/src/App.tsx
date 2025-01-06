import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sign from "./pages/Sign";
import Signup from "./pages/Signup";
import Dashboard from "./Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
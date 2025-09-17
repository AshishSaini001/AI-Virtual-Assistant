import { Routes,Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SIgnIn from "./pages/SIgnIn"

function App() {

  return (
   <Routes>
    <Route path='/signup' element={<SignUp />} />
    <Route path='/signin' element={<SIgnIn />} />
    </Routes>
  )
}

export default App

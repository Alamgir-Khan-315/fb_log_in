import LogIn from "./Components/Log in";
import { BrowserRouter , Routes , Route } from "react-router-dom"; 
import Sign_up from "./Components/Sign up";
import Forget_password from "./Components/Forget_password";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/Forget_password" element={<Forget_password />} />
      </Routes>
    </BrowserRouter>
  )
}
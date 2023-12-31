import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import Signin from "./Pages/Signin"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Header from "./Components/Header"

export default function App(){
  return<BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/sign-in" element={<Signin />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  </BrowserRouter>
}
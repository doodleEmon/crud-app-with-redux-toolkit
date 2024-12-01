import { Route, Routes } from "react-router-dom"
import About from "./pages/about/about"
import Home from "./pages/home/home"
import Navbar from "./components/navbar"
import Post from "./pages/post/post"

function App() {

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </div>
  )
}

export default App

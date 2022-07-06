import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/home"
import Header from "./components/header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return <Router>

    <Header />
    <Routes>
      <Route path="/" element= {<Home />} />
    </Routes>
    <Footer />
  </Router>
}

export default App;
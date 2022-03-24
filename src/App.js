import Navbar from "./components/Navbar"
import { Routes , Route } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from './pages/Contact'
import Error from "./pages/404"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App
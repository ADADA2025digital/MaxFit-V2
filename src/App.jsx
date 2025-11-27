import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/Styles/style.css';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from "./Components/ScrollToTop";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Therapist from './Pages/Therapist';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import ScrollToTopUp from './Components/ScrollToTopUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<div>Service/Therapist Page</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ScrollToTopUp />
    </div>
  )
}

export default App;

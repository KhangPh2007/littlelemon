
import './App.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationFrom';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Router>
        <AppBar/>
        <Main />
        <Routes>
          <Route path="/reservation" element={<ReservationForm />} />    
        </Routes>
      <Footer />
      </Router>
  );
}

export default App;

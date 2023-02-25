
import './App.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationFrom';
import Main from './components/Main';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Main />
      <ReservationForm />
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<ReservationForm />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;

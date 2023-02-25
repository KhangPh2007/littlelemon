
import './App.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationFrom';

function App() {
  return (
    <div className="App">
      {/* <AppBar/>
      <nav>
        <ul>
          <li>
            <a href="/home">Homepage</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <a href="/book" role="button">
        Book a table
      </a>
      <Footer/> */}
      <ReservationForm/>
    </div>
  );
}

export default App;

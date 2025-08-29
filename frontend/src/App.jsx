import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Holidays from './pages/Holidays';
import Flights from './pages/Flights';
import Profile from './pages/Profile';
import Recommendation from './pages/Recommendation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
    </Router>
  );
}

export default App;

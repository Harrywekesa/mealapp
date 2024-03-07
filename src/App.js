import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MealsScreen from './screens/MealsScreen';
import Navbar from './components/Navbar';
import LoginScreen from './screens/LoginScreen';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Auth>
          <Routes>
            <Route path="/" element={<MealsScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Auth>
      </div>
    </Router>
  );
}

export default App;

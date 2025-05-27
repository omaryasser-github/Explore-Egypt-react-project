import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Home';
import LogIn from '../pages/auth/login';
import SignUp from '../pages/auth/signup';
import Logout from '../pages/auth/logout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>
    </Router>
  );
}

export default App;

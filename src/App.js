import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/home/Home';
import ProfileData from './Pages/profile/ProfileData';
import ErrorPage from './ErrorPage';



function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path="/user/:id" element={<ProfileData />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

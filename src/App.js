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
    <footer><a href="https://github.com/joanatorres96/web-app-react" target="_blank" rel="noreferrer" className="github-link" title="Github Repositories">Open-source code</a> by<a href="https://github.com/joanatorres96/" target="_blank" rel="noreferrer" className="fst-italic github-link" title="Github page"> Joana Torres</a></footer>
    </div>
    </Router>
  
  );
  
}

export default App;

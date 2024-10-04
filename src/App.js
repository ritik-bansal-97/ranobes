import './App.scss';
import Header from './components/Header/Header';
import MainHomePage from './components/MainHomePage/MainHomePage';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<MainHomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;

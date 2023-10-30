import logo from './logo.svg';
import './App.css';
import Home from './views/pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
            <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

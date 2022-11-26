import Navs from './components/Navs';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import About from './pages/About';
import Community from './pages/Community';
import Sawi from './pages/Sawi';
import { ABOUT, COMMUNTIY, HOME, SAWI, LOGIN } from './routes';

function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Community />} path={COMMUNTIY} />
        <Route element={<Sawi />} path={SAWI} />
        <Route element={<Login />} path={LOGIN} />
      </Routes>
    </>
  );
}

export default App;

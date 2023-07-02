import {Route,Routes} from 'react-router-dom'
import Kenny from './components/kenny';
import Ernest from './components/ernest';
import Lauren from './components/lauren';
import Misha from './components/misha';
import Shanna from './components/shanna';
import Home from './components/home';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav';
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/kenny" element={<Kenny/>}/>
        <Route path="/ernest" element={<Ernest/>}/>
        <Route path="/misha" element={<Misha/>}/>
        <Route path="/lauren" element={<Lauren/>}/>
        <Route path="/shanna" element={<Shanna/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AboutPage from './pages/about';
import Register from './pages/enter';
import HomePage from './pages/home';
import New from './pages/new';

function App() {
  return (<Router>
    <Routes>
    <Route path='/' element={< HomePage />}></Route>
      <Route path='/about' element={< AboutPage />}></Route>
      <Route path='/enter' element={< Register />}></Route>
      <Route path='/new' element={< New />}></Route>
    </Routes>
  </Router>

  );
}

export default App;

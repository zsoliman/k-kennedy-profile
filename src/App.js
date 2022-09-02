import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Contact from './components/Contact';
import Animation from './components/Animation';
import Resume from './components/Resume';

function App() {

  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/still-gallery'
            element={<Image />}
          />

          <Route
            path='/moving-gallery'
            element={<Animation />}
          />

          <Route
            path='/contact'
            element={<Contact />}
          />

          <Route
            path='/resume'
            element={<Resume />}
          />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

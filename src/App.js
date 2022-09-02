import './App.css';
import { useRef } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';

function App() {

  const titleRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()
  const resumeRef = useRef()

  const handleTitleClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleResumeClick = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  // const clickHandler = () => {
  // handleTitleClick()
  // handleAboutClick()
  // handleProjectClick()
  // handleContactClick()
  // handleResumeClick()
  // }

  // Props for the <Nav /> :
  // handleTitleClick = { handleTitleClick }
  // handleAboutClick = { handleAboutClick }
  // handleProjectClick = { handleProjectClick }
  // handleContactClick = { handleContactClick }
  // handleResumeClick = { handleResumeClick }

  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home titleRef={titleRef} />}
          />
          <Route
            path='/about'
            element={<About aboutRef={aboutRef} />}
          />

          <Route
            path='/still-gallery'
            element={<Image />}
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

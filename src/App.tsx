import React from 'react';
import Header from './components/Header'
import HeaderPage from './components/Header-page'
import Footer from './components/Footer'
import Index from './components/Index'
import Gallery from './components/Gallery'
// import second from './components/n'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom'


function App() {
    const toggletheme = () => {
        document.body.classList.toggle('active-dark-mode');
        document.body.classList.toggle('theme');
    }

  return (
    <div className="App">
        <BrowserRouter>
      {/* <body className="position-relative spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="150"> */}
          <div id="my_switcher" className="my_switcher">
              <ul>
                  <li>
                      <div onClick={toggletheme}  data-theme="light" className="setColor light">
                          <img className='theme' src="assets/images/about/sun-01.svg" alt="Sun images"/><span title="Light Mode"> </span>
                      </div>
                  </li>
                  <li>
                      <div onClick={toggletheme} data-theme="dark" className="setColor dark">
                          <img className='theme' src="assets/images/about/vector.svg" alt="Vector Images"/><span title="Dark Mode"> </span>
                      </div>
                  </li>
              </ul>
          </div>
          
          
          <Routes>
                <Route path="/" element={<>
                    <div className="main-page">
                    <Header/>
                </div>
                <Index/></>}/>
                <Route path="/portfolio" element={<><div className="main-page">
             <HeaderPage/>
          </div><Gallery/></>}/>
          </Routes>
          
          {/* <Gallery/> */}
          <Footer/>

      {/* </body> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

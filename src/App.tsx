import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './components/Index'
// import second from './components/n'
import './App.css';

function App() {
  return (
    <div className="App">
        
      <body className="position-relative spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="150">
          <div id="my_switcher" className="my_switcher">
              <ul>
                  <li>
                      <a href="javascript: void(0);" data-theme="light" className="setColor light">
                          <img src="assets/images/about/sun-01.svg" alt="Sun images"/><span title="Light Mode"> Light</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript: void(0);" data-theme="dark" className="setColor dark">
                          <img src="assets/images/about/vector.svg" alt="Vector Images"/><span title="Dark Mode"> Dark</span>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="main-page">
             <Header/>
          </div>
          <Index/>
          <Footer/>

      </body>
    </div>
  );
}

export default App;

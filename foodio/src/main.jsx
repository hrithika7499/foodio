import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src="assets/logo.png"/>
        </div>
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      
   
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)

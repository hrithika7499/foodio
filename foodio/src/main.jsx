import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Componenets/Header'
import Body from './Componenets/Body'
import './index.css'







const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
     
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardObject } from './models/models';


const App: React.FC = () => {
  const [allCards, setAllCards] = useState<CardObject[]>([]);

  return (
  <BrowserRouter>
    <NavBar />
      <div className="container mt-4">
        <Routes>
      {routes.map((route, index) => (
        <Route key={index} path= {route.path} element={route.component}/>
      ))
      }
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

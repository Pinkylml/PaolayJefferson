import React from 'react';
import PaginaRelacion from './components/PaginaRelacion';
import Nav from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <PaginaRelacion />
    </div>
  );
};

export default App;

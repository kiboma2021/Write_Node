import { useState } from 'react';
import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';

function App() {
  const [darkMode, setdarkMode ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

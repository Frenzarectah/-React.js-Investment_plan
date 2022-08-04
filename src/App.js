import './App.css';
import React, { createContext, useState } from 'react';
import Layout from './pages/Layout.js';



function App() {
  const [page, setPage] = useState(1);
  const global = createContext(page,setPage);
  return (
    <div className='w-full h-[100vh]'>
      <Layout/>
    </div>
  );
}

export default App;

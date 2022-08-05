import './App.css';
import React, { createContext, useState } from 'react';
import Layout from './pages/Layout.js';
export const globale = React.createContext();



function App() {
  const [page, setPage] = useState(1);
  
  return (
    <globale.Provider value = {[page,setPage]}>
    <div className='w-full h-[100vh]'>
      <Layout/>
    </div>
    <button onClick={()=>setPage(page+1)}>vai là</button>
    <div>{page}</div>
    </globale.Provider>
  );
}

export default App;

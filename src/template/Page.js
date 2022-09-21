/** this is the main component of the whole app, it contains the bigger part of API, such as
 * react-router-dom (for url-driven rendering), useContext to access the global "page" state and
 * it includes all the three form pages in order to use properly the router-Dom API.
 * 
 */
import React, {useContext } from 'react';
import { globale } from '../App';
import Form from '../components/Form/Form';
import Form1 from '../components/Form1/Form1';
import Form2 from '../components/Form2/Form2';
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {pageInfo} from '../utils';
import '../App.css';

const Page = () =>{
    const [page] = useContext(globale);
    return(
        <>
        <BrowserRouter>
        <div className='mt-[10px] flex flex-col'>
            <div className='montserrat-alt text-black extrabold text-[28px]'>
                {pageInfo[page].title}
            </div>
            <div className='mt-[12px] mr-[245px] montserrat text-[#A4AEB4] text-md'>
                {pageInfo[page].subtitle}
            </div>
            <div id="page_form" className="w-full mt-[15px]">
            <Routes>
              <Route path="/" element={<Form/>}/>
              <Route path="/page1" element={<Form1/>}/>
              <Route path="/page2" element={<Form2/>}/>
            </Routes>
            </div>
        </div>
        <Footer/>
        </BrowserRouter>
        </>
    )
}
export default Page;
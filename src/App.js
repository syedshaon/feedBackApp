
import React from 'react';
import {BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
 
//
import { FeedbackProvider } from "./context/Feedback";

//
 
import Header from './components/Header'
import FeedbackList from './components/FeedbackList' 
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIcon from './components/AboutIcon'

function App() {

   

     

    

    return(

        <FeedbackProvider>
       <Header/>
       

            <BrowserRouter>
                <Routes>
                    
                    < Route path='/' element={
                    
                        <div className='container'>                    
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />   
                            <AboutIcon/>                
                         </div> 
                    }/>
                    < Route path='/about' element={<AboutPage/> }/>
                 </Routes>


                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
            </BrowserRouter>
                    
       
       </FeedbackProvider> 
        
    )
}

export default App;
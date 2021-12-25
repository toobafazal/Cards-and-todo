import React from 'react'

import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Service from '../Components/Service'
import Error from '../Components/Error'
import Home from '../Components/Home'
import Header from '../Components/Header'
import Cards from '../Components/Cards'
import CardDescription from '../Components/CardDescription'

const Approuter = () => {
    return (
        <>
          <Router>
          <Header />
        <Routes>
           <Route path="/" element={<Home />}  />
           <Route path="/about" element={<About />}  />
           <Route path="/contact" element={<Contact />}  />
           <Route path="/service" element={<Service />}  />
           <Route path="/cards" element={<Cards />}  />
           <Route path="/card_description" element={<CardDescription />}  />
           <Route path="*" element={<Error />}  />

           </Routes>  
           </Router>
        </>
    )
}

export default Approuter

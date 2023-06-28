import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './component/Admin.jsx'
import View from './component/View.jsx'
import Search from './component/Search.jsx' 
import Subadmin from './component/Subadmin.jsx'
// import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
    return(
        // <ChakraProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Admin/>}/>
            <Route path="/view" element={<View/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/sub" element={<Subadmin/>}/>
        </Routes>
        </BrowserRouter>
        // </ChakraProvider>
    )


}
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <App/>
    </> 


)



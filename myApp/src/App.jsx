import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FirstApp from "./Components/First";
import Testing from "./Components/Testing";
import Register from "./Components/MUI/Register";
import Arrowfunction from "./Components/ES7/Arrowfunction";
import BasicTable from "./Components/MUI/BasicTable";
import Arraymethod from "./Components/ES7/Arraymethod";
import SpreadOperator from "./Components/ES7/SpreadOperator";
import Cards from "./Components/MUI/Cards";
function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/testing' element={<Testing/>}/>
          <Route path="/" element={<Register/>} />
          <Route path="/arrowfunction" element={<Arrowfunction/>} />
          <Route path="/BasicTable" element={<BasicTable/>}/>
          <Route path= "/arraymethod" element={<Arraymethod/>}/>
          <Route path="/SpreadOperator" element={<SpreadOperator/>} />
          <Route path="/Cards" element={<Cards/>} />
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
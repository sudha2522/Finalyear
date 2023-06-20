import {Routes,Route} from 'react-router-dom';  
import './App.css';
import Faculties from './components/Faculties';
import MainPage from './components/MainPage';
import * as React from 'react'
import { background, ChakraProvider } from '@chakra-ui/react'
import Footers from './components/Footers';
import Contact from './components/Contact';
import RsearchArea from './components/RsearchArea';
import Labo from './components/Labo';
import './components/style.css'
import Activity from './components/Activity';
function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{ marginTop:"60px" }}>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/Faculties' element={<Faculties/>}/>

      <Route path='footer' element={<Footers/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/researchArea' element={<RsearchArea/>}/>
      <Route path='/lab' element={<Labo/>}/>
      <Route path='/contactus' element={<Contact/>}/>
     
      </Routes>
    </div>
    </ChakraProvider>
    
  );
}

export default App;

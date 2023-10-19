import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

  const [getCourse, setCourse] = useState([]);
  const [getCompanyDetails, setCompanyDetails] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3001/GetCourses").
      then((result) => {
          setCourse(result.data);
      }).catch((error) => console.log(error))
  },[]);
  useEffect(() => {
    axios.get("http://localhost:3001/GetCompanyDetail").
    then((result) => {
      setCompanyDetails(result.data);
    }).catch((error) => console.log(error))
  },[]);

  return (
   <>
    <BrowserRouter>
    <Navbar getCourse={getCourse} getCompanyDetails={getCompanyDetails}/>
      <Routes>
        <Route path='/' element={<Home getCompanyDetails={getCompanyDetails} getCourse={getCourse} />} />
        <Route path='/Home' element={<Home getCompanyDetails={getCompanyDetails} getCourse={getCourse} />} />
        <Route path='/About' element={<About getCompanyDetails={getCompanyDetails} />} />
        <Route path='/Contact' element={<Contact getCompanyDetails={getCompanyDetails} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    <Footer getCourse={getCourse} getCompanyDetails={getCompanyDetails}/>
    </BrowserRouter>
   </>
  );
}

export default App;

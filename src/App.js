import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About';
import ContactUS from './Page/ContactUS';
import Home from './Page/Home';
import Navber from './Page/Navber';
import NotFound from './Page/NotFound';
import Project from './Page/Project';
import Resume from './Page/Resume';
import Skills from './Page/Skills';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/projects' element={<Project></Project>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/contactME' element={<ContactUS></ContactUS>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

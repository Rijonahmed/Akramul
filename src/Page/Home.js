import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactUS from './ContactUS';
import Footer from './Footer';
import Project from './Project';
import Skills from './Skills';

const Home = () => {
  return (
    <div className='bg-secondary'>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
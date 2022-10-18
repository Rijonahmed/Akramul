import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactUS from './ContactUS';
import Project from './Project';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <ContactUS></ContactUS>

    </div>
  );
};

export default Home;
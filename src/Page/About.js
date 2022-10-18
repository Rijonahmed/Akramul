import React from 'react';

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.git-tower.com/blog/media/pages/posts/git-wordpress-1/2d333fe8bf-1664818656/og.png")` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold ">About US</h1>
            <p className="mb-5 text-xs lg:text-2xl font-bold">WordPress Developer with 4 years of functional experience designing and managing business websites
              using WordPress. Skilled in front-end and back-end development and developing themes and plugins. Successfully creates attractive and user-friendly websites to meet client expectations.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import './ShareCSS.css'

const Skills = () => {
  return (
    <div className=''>

      <div className='max-w-7xl mx-auto '>
        <h1 className='text-3xl font-bold text-center text-primary mt-11'>My Skills</h1>

        <div class="mx-12" data-aos="fade-down">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">



          </div>
        </div>


        <div className='flex flex-col md:flex-row gap-2 justify-around items-center py-10 px-2'>

          <div data-aos="fade-up" data-aos-duration="1000" className="text-left w-full">

            <h2 className='font-bold'>Wordpress <br /> <progress class="progress progress-success max-w-xs shadow-2xl" value="95" max="100"></progress></h2>
            <h2 className='font-bold'>ReactJS <br /> <progress class="progress progress-primary max-w-xs shadow-2xl" value="90" max="100"></progress></h2>
            <h2 className='font-bold'>JavaScript <br /> <progress class="progress progress-accent max-w-xs shadow-2xl" value="85" max="100"></progress></h2>
            <h2 className='font-bold'>Back-end <br /> <progress class="progress progress-error max-w-xs shadow-2xl" value="60" max="100"></progress></h2>



          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <img className='object-cover' src="https://cilected.com/wp-content/uploads/2019/05/WordPress.png" alt="education img" />
          </div>


        </div>



      </div>
    </div>
  );
};

export default Skills;
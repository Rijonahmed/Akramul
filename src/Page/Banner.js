import React from 'react';
import { FaHandSpock } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <section className='flex flex-col md:flex-row gap-2 justify-evenly items-center py-10 px-2'>
        <div>
          <img className='max-w-xs' src="https://i.ibb.co/4K1ZhPc/person-2.png" alt="ak Img" />

        </div>
        <div className='justify-items-center'>
          <h1 className='text-4xl font-bold lg:flex'>Hi&nbsp;<span className='text-amber-400 text-5xl'> <FaHandSpock /> </span>&nbsp;I'm Akramul Hasan</h1>

          <h2 className='font-bold'>Wordpress developer</h2>
        </div>
      </section>

    </div>
  );
};

export default Banner;
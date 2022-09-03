import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className='flex flex-col md:flex-row gap-2 justify-evenly items-center py-10 px-2'>
        <div>
          <img className='max-w-xs' src="https://i.ibb.co/4K1ZhPc/person-2.png" alt="ak Img" />

        </div>
        <div className='justify-items-center'>
          <h1 className='text-3xl font-bold'> Hi I'm Akramul Hasan</h1>
        </div>
      </section>

    </div>
  );
};

export default Banner;
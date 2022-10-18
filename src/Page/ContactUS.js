import React from 'react';

const ContactUS = () => {
  return (
    <div>
      <div
        style={{
          background: `url('https://www.bangkokair.com/images/menu/Sub_Menus/tmb_OurSalesContact-1200x628.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}

        class="hero min-h-screen bg-base-200">
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-white">Contact US</h1>
            <p class="py-6 text-white">However, if you have other request or question, don’t hesitate to use the form.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div class="card-body">
              <form>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Name</span>
                  </label>
                  <input type="text" name='user_name' placeholder="Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Email</span>
                  </label>
                  <input type="email" name='user_email' placeholder="email" class="input input-bordered" required />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white ">Massage</span>
                  </label>
                  <textarea name='message' class="textarea textarea-bordered" placeholder="Type"></textarea>

                </div>
                <button className='btn bg-primary mt-5 w-full text-2xl font-bold'>
                  <input type="submit" value="Send" />
                </button>



              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactUS;
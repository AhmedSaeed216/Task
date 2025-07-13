
import React from 'react';

const EmailCaptureFooter = () => {
  return (
    // <section className=" text-white text-center py-12 px-4">
     <section className=" text-white text-center ">
      <p className="mb-4 text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
      <form className="flex flex-col sm:flex-row gap-2 justify-center">
        <input type="email" placeholder="Email address" className="p-3 rounded sm:rounded-r-none w-full sm:w-80 text-black" />
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded sm:rounded-l-none text-white font-semibold">Get Started &gt; </button>
    
      </form>
    </section>
  );
};


export default EmailCaptureFooter;


import React from 'react';

const Footer = () => {
  const links = ["FAQ", "Help Center","Acount","Media Center","Inverstor Relations","Jobs","Ways to Watch","Terms of use",  "Privacy", "Cookie Preferences", "Corporate Information","Contact Us","Speed Test","Legal Notices","Only on Netflix"];

  return (
    <footer className="bg-black text-gray-400 py-10 px-6 text-sm">
      {/* <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6"> */}
      <div className='max-w-4xl mx-auto grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-3 mb-5 underline'>
        {links.map((link, idx) => (
          <a key={idx} href="#" className="hover:scale-105">{link}</a>
        ))}
      </div>
      <div className="flex items-center justify-evenly">
        <select className="bg-gray-800 text-white p-2 rounded mb-2">
          <option>English</option>
          <option>Urdu</option>
        </select>
        <p>Netflix Pakistan</p>
      </div>
    </footer>
  );
};

export default Footer;

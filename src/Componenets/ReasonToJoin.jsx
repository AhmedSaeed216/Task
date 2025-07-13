
import React from 'react';


const Card = ({ title, des, icon }) => {
  return (
    <div className="h-full  flex flex-col justify-between p-4">
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-xl text-gray-300 text-center">{des}</p>
      <div className="text-3xl lg:text-5xl mb-4 text-right">{icon}</div>
    </div>
  );
};

// Data
const reasons = [
  { title: 'Enjoy on your TV', des: 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.', icon: '📺' },
  { title: 'Download to watch offline', des: 'Save your favorites easily and always have something to watch.', icon: '⬇️' },
  { title: 'Watch everywhere', des: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.', icon: '📱' },
  { title: 'Create profiles for kids', des: 'Send kids on adventures with their favorite characters in a space made just for them.', icon: '👶' },
];

// Main Section
const ReasonsToJoin = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-40">
      <h2 className="text-2xl sm:text-2xl font-bold lg:px40 mb-10">More Reasons to Join</h2>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-indigo-950 to-purple-00 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Card title={reason.title} des={reason.des} icon={reason.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToJoin;

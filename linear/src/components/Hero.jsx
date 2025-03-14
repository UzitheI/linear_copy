import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Work smarter, not harder</h1>
      <p className="mt-4 text-lg">Linear simplifies project management with elegant tools.</p>
      <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">Get started for free</button>
      <img src="/assets/hero-image.svg" alt="Hero" className="mt-10" />
    </section>
  );
};

export default Hero;

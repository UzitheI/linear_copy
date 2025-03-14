import React from 'react';

const Features = () => {
  const features = [
    { id: 1, title: "Fast and Intuitive", description: "Our interface is built for speed.", image: "/assets/feature1.svg" },
    { id: 2, title: "Collaboration", description: "Work together seamlessly.", image: "/assets/feature2.svg" },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature) => (
          <div key={feature.id} className="text-center">
            <img src={feature.image} alt={feature.title} className="mx-auto" />
            <h2 className="text-2xl font-semibold mt-4">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

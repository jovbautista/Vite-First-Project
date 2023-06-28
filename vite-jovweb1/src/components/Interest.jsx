import React from 'react';

const Interest = () => {
  // Sample data for the interest gallery
  const interests = [
    {
      id: 1,
      title: 'Interest 1',
      image: 'https://example.com/interest1.jpg',
    },
    {
      id: 2,
      title: 'Interest 2',
      image: 'https://example.com/interest2.jpg',
    },
    {
      id: 3,
      title: 'Interest 3',
      image: 'https://example.com/interest3.jpg',
    },
  ];

  return (
    <div id="interest" className="mt-8 mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {interests.map((interest) => (
            <div key={interest.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={interest.image}
                alt={interest.title}
                className="w-full h-48 object-cover mb-2 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{interest.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;

import React from 'react';

const Interest = () => {
  // Sample data for the interest gallery
  const interests = [
    {
      id: 1,
      title: 'Coding',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 2,
      title: 'Sketching',
      image: 'https://example.com/interest2.jpg',
    },
    {
      id: 3,
      title: 'Learning',
      image: 'https://example.com/interest3.jpg',
    },
  ];

  return (
    <div id="interest" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-center">Interests</h1>
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

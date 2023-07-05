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
      image: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/293401663_420508356759347_340197723726034128_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGfUCvQJ7zrjsDOVB9hBqTAGI-xmz5ND8UYj7GbPk0Pxd4vx5w0TCxtY7WYWIKtamwZ89Cvdyso2TIEvvtz5xQw&_nc_ohc=h_nK1jcHDrkAX-P86Un&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdR8io8Z-u32yEWeVqA-7-zz-AG5skMfgO1GpuAyNxQHMw&oe=64CCD136',
    },
    {
      id: 3,
      title: 'Learning',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/348361593_276391511416687_3489596281531903788_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH7Nc-QVhDxhegBtUwxdwVHtwcQvumBGR-3BxC-6YEZH329uoH-DI90bnP5NurDjFy3JTM6sNxBoJ3pH3t4u_sh&_nc_ohc=a1WSEPGl2YcAX9RCUz_&_nc_ht=scontent.fcrk1-3.fna&oh=03_AdTc8sC3h2owMxcBloot3Sp-XdpX7msjmLPTCNKBqX_rBA&oe=64CCC3B5',
    },
  ];

  return (
    <div
      id="interest"
      className="max-w-screen-lg mx-auto py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Interests</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-3 justify-center items-center">
          {interests.map((interest) => (
            <div
              key={interest.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              style={{ marginBottom: '-1rem' }}
            >
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

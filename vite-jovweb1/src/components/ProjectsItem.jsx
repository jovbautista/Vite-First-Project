import React from 'react';

const ProjectsItem = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <h3>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectsItem;

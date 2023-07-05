import React from 'react';

const ProjectsItem = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default ProjectsItem;

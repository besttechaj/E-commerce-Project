import React from 'react';

const CourseCard = ({ id, course_name, course_description }) => {
  return (
    <div>
      <div className='courseCard_outer'>
        <h3>{course_name}</h3>
        <div className='courseCard_inner1'>{course_description}</div>
        <div className='courseCard_inner2'>
          <button>Details</button>
          <button>Enroll</button>
          <button>Batches</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

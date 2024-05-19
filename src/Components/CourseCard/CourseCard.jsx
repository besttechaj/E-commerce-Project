import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, course_name, course_description }) => {
  //TODO
  // let navigate= useNavigate()

  return (
    <div>
      <div className='courseCard_outer'>
        <h3>{course_name}</h3>
        <div className='courseCard_inner1'>{course_description}</div>
        <div className='courseCard_inner2'>
          <button id='btn_details'>Details</button>
          <button id='btn_enroll'>Enroll</button>
          <button id='btn_batches'>Batches</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

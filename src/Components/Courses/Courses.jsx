import { useContext, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';
import { UserContext } from '../../context/UserContext';
import CourseCard from '../CourseCard/CourseCard';

const Course = () => {

  let { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:3000/course`).then(
      (d) => {
        // console.log(d.data);
        dispatch({
          type: 'FETCH_COURSE',
          payload: d.data,
        });
      },
      (e) => console.log(e)
    );
  }, []);

  return (
    // console.log(state.Courses),
    <>
      <h1>Courses Offered by Our Institutes !!</h1>
      <div className='course_container'>
        {state.Courses.map((v, i) => {
          let { id, course_name, course_description } = v;
          return (
            <CourseCard
              key={i}
              id={id}
              course_name={course_name}
              course_description={course_description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Course;

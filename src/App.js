import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import courseData from '../src/courseData/courses';
import Header from './Header/Header';
import Courses from './Courses/Courses';
import { useState } from 'react';

function App() {

  const [carts, setCart] = useState([]);
  const btnEventHandler = (course) => {
    const newCarts = [...carts, course];
    setCart(newCarts);
  }

  const [btnText, setBtnText] = useState('Enroll Now');
  const changeBtnText = (text) => {
    const newBtnText = text;
    setBtnText(newBtnText);
  };

  return (
    <div className="App">
      <Header carts={carts}></Header>

      <div className="container mt-5">
        <div className="row">
          {
            courseData.map(courses =>
              <Courses courses={courses} btnEventHandler={btnEventHandler}
                key={courses.id}>
              </Courses>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

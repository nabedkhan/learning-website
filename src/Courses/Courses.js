import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Courses.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
import { useRef } from 'react';

const Courses = (props) => {
    console.log(props);
    const courses = props.courses;
    const { name, img, mentor, price, rating, totalRating } = props.courses;

    //text change after click
    const [btnText, setBtnText] = useState('Enroll Now')
    const changeBtnText = (text) => setBtnText(text);

    //background color change after click
    const btnRef = useRef();
    const changeBgColor = () => btnRef.current.setAttribute('class', 'bg-dark');

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'>Mentor: <span>{mentor}</span></Card.Text>
                    <Card.Text className='mb-0'>
                    </Card.Text>
                    <Card.Title>Price: ${price}</Card.Title>
                    <Button ref={btnRef} variant='btn' onClick={() => {
                        props.btnEventHandler(courses);
                        changeBtnText('Enrolled');
                        changeBgColor();
                    }}> {btnText} <ArrowForwardIosIcon className='arrow'></ArrowForwardIosIcon>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;
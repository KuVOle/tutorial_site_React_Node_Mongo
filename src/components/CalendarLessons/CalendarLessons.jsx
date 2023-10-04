import React from 'react';
import LessonsCards from '../LessonCard/LessonCard';
import { Container } from 'react-bootstrap';

const CalendarLessons = ({ value }) => {
    console.log(value);
    return (
        < Container className='' >
            {
                value?.length ?
                    value.map((el) => <LessonsCards key={el?._id} value={el} />)
                    :
                    <h2 className="display-2 text-muted text-center p-5">
                        Список пуст
                    </h2>}
        </Container >
    );
}

export default CalendarLessons;

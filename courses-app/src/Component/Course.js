import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Cardtext,
    Cardfooter,
    Button,
    Container,
    CardText
} from 'reactstrap';

const Course = ({ course })=>{
return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
                <Container className="text-center ml-3">
                    <Button color="danger ml-3">Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
        </CardBody>
    </Card>
);
};

export default Course;
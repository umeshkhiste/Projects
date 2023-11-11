import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'

const AddCourse=()=>{
    return(
        <Fragment>
            <h1 className = "text-center my-3">Enter course details here</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type = "text" placeholder='Enter id here' name = "userId" id='userId'></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type = "text" placeholder='Enter title here' name = "title" id='title'></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type = "textarea" placeholder='Enter description here' name = "description" id='description'
                    style={{height:250}}></Input>
                </FormGroup>

                <Container className='text-center'>
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )
}

export default AddCourse;

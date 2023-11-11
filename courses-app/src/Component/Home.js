import React from 'react'
import {jumbotron, Container, Button} from 'reactstrap'

const Home=() =>{
    return(
        <div>
            <jumbotron className = "text-center bg-primary">
            <h3>This is a React single page Application</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
            <Container>
                <Button color='primary'>Click me</Button>
            </Container>
            </jumbotron>
        </div>
    )
}

export default Home;
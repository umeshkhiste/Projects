import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home'
import Course from './Component/Course';
import Allcourses from './Component/Allcourses';
import AddCourse from './Component/AddCourse';
import Header from "./Component/Header";
import Menus from './Component/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const btnHandle = () =>{
    toast.error("Error",{
      position:"top-center"
    });
  };
  return (
  <div>
    <Router>
     <ToastContainer/>
     <Container className="text-center">
      <Header/>
      <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}>
            <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/add-course" element={<AddCourse/>} exact/>
              <Route path="/view-courses" element={<Allcourses/>} exact/>
            </Routes>
        </Col>
      </Row>
     </Container>
    </Router>
    </div>
  );
}

export default App;


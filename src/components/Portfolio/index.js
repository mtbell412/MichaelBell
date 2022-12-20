import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import SpaceImg from '../../images/space.png';


function Portfolio() {
  const projects = [
    {
      title: "TItle 1",
      image: SpaceImg,
      description: 'project 1 description',
      link: "http://google.com"
    },
    {
      title: "TItle 2",
      image: SpaceImg,
      description: 'project 2 description',
      link: ""
    },
    {
      title: "TItle 3",
      image: SpaceImg,
      description: 'project 3 description',
      link: "http://google.com"
    },
    {
      title: "TItle 4",
      image: SpaceImg,
      description: 'project 4 description',
      link: ""
    },
    {
      title: "TItle 1",
      image: SpaceImg,
      description: 'project 1 description',
      link: "http://google.com"
    },
    {
      title: "TItle 2",
      image: SpaceImg,
      description: 'project 2 description',
      link: ""
    },
    {
      title: "TItle 3",
      image: SpaceImg,
      description: 'project 3 description',
      link: "http://google.com"
    },
    {
      title: "TItle 4",
      image: SpaceImg,
      description: 'project 4 description',
      link: ""
    },
    {
      title: "TItle 1",
      image: SpaceImg,
      description: 'project 1 description',
      link: "http://google.com"
    },
    {
      title: "TItle 2",
      image: SpaceImg,
      description: 'project 2 description',
      link: ""
    },
    {
      title: "TItle 3",
      image: SpaceImg,
      description: 'project 3 description',
      link: "http://google.com"
    },
    {
      title: "TItle 4",
      image: SpaceImg,
      description: 'project 4 description',
      link: ""
    }
  ]
  return (
    <Container>
      <Row>
        <h1>Portfolio</h1>
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
        {projects.map((project, idx) => (
          <Col>
            <Card>
              <a href={project.link}>
                <Card.Img variant="top" src={project.image} />
              </a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
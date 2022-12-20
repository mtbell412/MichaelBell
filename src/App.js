// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer';
import AboutMe from './components/About Me';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import PDF from "./pdf/Deans.pdf"


function App() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Container>
        <Portfolio></Portfolio>
      </Container>
      <Contact></Contact>
      {/* <iframe src={PDF} height="700px" width="100%"></iframe> */}
      <Resume></Resume>
      <Footer/>
    </div>
  );
}

export default App;


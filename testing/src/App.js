import logo from './logo.svg';
import './App.css';
import Mybutton from './components/MyButton';
import InputArea from './components/InputArea';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {
  //Declare a state variable here
  const x =5;
  const y = true;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload HELLO.</p>


        <Mybutton/>
        <Mybutton></Mybutton>
        <InputArea></InputArea>

        <h1> HELLO</h1>
        <h2> {x} </h2>
        <h2> {1+1} </h2>
        <h2> {y ? 'yes' : 'no'} </h2>
        
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a>
      </header>


      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>





    </div>
  );
}

export default App;

import './App.css';
import MyButton from './components/MyButton';
import TestF from './components/TestF';
import ProgressBar from './components/Progress';
//import ProgressBar2 from './components/Progress2';
import BasicDatePicker from './components/BasicDatePicker';




function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
      <TestF></TestF>

      <ProgressBar value={"84"} BarBackgroundColor={"#385682"} BarColor={"#5297FF"} textColor={"#C7DDFF"}  />

      
      <h1> Testing</h1>

      <BasicDatePicker></BasicDatePicker>


      

      <h1> HELLO</h1>
      <h1> HELLO</h1>
    </div>
  );
}

export default App;

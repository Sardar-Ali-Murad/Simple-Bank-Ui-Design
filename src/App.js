import logo from './logo.svg';
import './App.css';
import {Navbar,Billing,Card,Company,About,Security,Intro,Details,Footer} from "./components/index.js"


function App() {
  return (
    <div className="App" style={{background:"black",overflow:"hidden"}}>
      
         <Navbar/>
         <Intro/>
         <Details/>
         <Security/>
         <Billing/>
         <About/>
         <Footer/>
    </div>
  );
} 

export default App;

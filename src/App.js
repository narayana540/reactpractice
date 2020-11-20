import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import Eventbind from './components/Eventbind'
import ParentComponent from './components/ParentComponent';
import Usergreeting from './components/Usergreeting';



function App() {
  return (
    <div className="App">
       {/* <Greet name="Feroz" heroName="Superman">
         <p>This is props children</p>
       </Greet>
      
         <button>Action</button>
        </Greet>
       <Greet name="Justin" heroName="Batman"/>

       <Message/> */}
      
        {/* <Greet name="Diana" heroName="Wonder Woman"></Greet>
        <Welcome name="Justin" heroName="Batman"></Welcome>
       <Counter/> */}
       {/* <Welcome />
       <Hello /> */}
       {/* <ClassClick />
       <FunctionClick /> */}
       {/* <Eventbind /> */}
       {/* <ParentComponent/> */}
       <Usergreeting/>

    </div>
  );
}

export default App;

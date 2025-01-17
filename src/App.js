import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../../Redux/slices/counter";
import { increment } from './features/userDetailSlice';
import Navbar from './app/components/Navbar';
import Create from './app/components/Create';
import Read from './app/components/Read';
import Update from './app/components/Update';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Iframe from './app/components/Iframe';
import ListUrl from './app/components/ListUrl';
import GridView from './app/components/GridView';


function App() {
  // const count = useSelector((state) => state.app.value);
  const dispatch = useDispatch()
  return (
    
    <div className="App">
      {/* <h1>hello </h1> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route exact path='/edit/:id' element={<Update/>}/> 
        <Route exact path='/listurl' element={<ListUrl/>}/> 
        <Route path="/iframe" element={<Iframe />} />
        <Route path="/gridview" element={<GridView />} />
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

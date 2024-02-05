import { Route, Routes } from 'react-router-dom';
import './App.css';
import Employes from './components/Employes';
import Empcreate from './components/Empcreate';
import Empedit from './components/Empedit';
import Empdelete from './components/Empdelete';
import Empdetails from './components/Empdetails';

function App() {
  return (
    <div className="App">
      <h3>React-Js CRUD with JSON</h3>
     <Routes>
      <Route path='/' element={<Employes/>}/>
      <Route path='/create' element={<Empcreate/>}/>
      <Route path='/edit/:ids' element={<Empedit/>}/>
      <Route path='delete/:ids' element={<Empdelete/>}/>
      <Route path='/deatils/:ids' element={<Empdetails/>}/>
     </Routes>
    </div>
  );
}

export default App;

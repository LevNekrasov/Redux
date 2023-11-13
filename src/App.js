import './App.css';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';


function App() {
  return (
    <>
      <ServiceAdd/>
      <ServiceFilter/>
      <ServiceList/>
    </>  
  );
}

export default App;
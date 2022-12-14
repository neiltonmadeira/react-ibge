import { useState }from 'react';
import './App.css';
import Estados from './components/Estados';
import Cidades from './components/Cidades';
import Distritos from './components/Distritos';


function App(){

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setFormValues({...formValues, [name]:value });
  }

  return (
    <div className="container">
      <form>
      <label htmlFor="state">Estado:</label>
       <Estados onChange={handleInputChange}/>
        <label htmlFor="city">Cidade:</label>
       <Cidades state={formValues.state} onChange={handleInputChange}/>
       <label htmlFor="district">Informações do distrito:</label>
       <Distritos city={formValues.city} />
      </form>
    </div>
  )
}

export default App;

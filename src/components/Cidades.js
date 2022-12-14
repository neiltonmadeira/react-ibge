import { useEffect, useState } from "react";
import { fetchCityByState } from "../helpers/ibge";



const Cidades = ({state, onChange = () => {}}) => {
    const [cities, setCities] = useState([])
    useEffect(() => {
      fetchCityByState(state).then((cities) =>{
        setCities(cities);
      });
    }, [state]);

    return (
       
        <select id="city" name="city" onChange={onChange}>
         {cities.map((city) => {
            const {id, nome} = city;
            return (
              <option key={id} value={id}>{nome}</option>
            )
          })}
        </select>
    )
};

export default Cidades;
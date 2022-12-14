import { useEffect, useState } from "react";
import { fetchStates } from "../helpers/ibge";

const Estados = ({onChange = () => {} }) => {
  const [states, setStates] = useState([])
  useEffect(() => {
    fetchStates().then((states) =>{
      setStates(states);
    });
  }, []);

    return (
       
        <select id="state" name="state" onChange={onChange}>
          {states.map((state) => {
            const {sigla, nome} = state;
            return (
              <option key={sigla} value={sigla}>{nome}</option>
            )
          })}
          
        </select>
    )
};

export default Estados;
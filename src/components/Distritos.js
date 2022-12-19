import { useEffect, useState } from "react";
import { fetchDistrictByCity } from "../helpers/ibge";



const Distritos = ({id, name, city, onChange =()=>{}}) => {
    const [districts, setDistricts] = useState([])
    useEffect(() => {
      fetchDistrictByCity(city).then((districts) =>{
        setDistricts(districts);
      });
    }, [city]);

    return (
       
      <div className="dis" id={id || name} name={name || id} onChange={onChange}>
      {districts.map((ds) => {
         
         return (
          <div key={id}>
           
           <strong>Id: {ds.id}</strong>
           <br></br>
           <strong>Nome: {ds.nome}</strong>
           <br></br>
           <strong>UF: {ds.municipio.microrregiao.mesorregiao.UF.sigla}</strong>
           <br></br>
           <strong>Microrregiao: {ds.municipio.microrregiao.nome}</strong>
           <br></br>
           <strong>Mesorregiao: {ds.municipio.microrregiao.mesorregiao.nome}</strong>
           
          
           </div>
         )
       })}
     </div>
    )
};

export default Distritos;
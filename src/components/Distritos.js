import { useEffect, useState } from "react";
import { fetchDistrictByCity } from "../helpers/ibge";



const Distritos = ({city, onChange = () => {}}) => {
    const [districts, setDistricts] = useState([])
    useEffect(() => {
      fetchDistrictByCity(city).then((districts) =>{
        setDistricts(districts);
      });
    }, [city]);

    return (
       
      <div id="district" name="district" onChange={onChange}>
      {districts.map((ds) => {
         
         return (
          <div>
           <strong>id: {ds.id}</strong>
           <br></br>
           <strong>nome: {ds.nome}</strong>
           <br></br>
           <strong>UF: {ds.municipio.microrregiao.mesorregiao.UF.sigla}</strong>
           <br></br>
           <strong>microrregiao: {ds.municipio.microrregiao.nome}</strong>
           <br></br>
           <strong>mesorregiao: {ds.municipio.microrregiao.mesorregiao.nome}</strong>
           
          
           </div>
         )
       })}
     </div>
    )
};

export default Distritos;
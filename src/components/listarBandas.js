import Banda from "./banda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";
import React, { useEffect, useState } from "react";

const ListarBandas = (props) => {
  const [bandas, setBandas] = useState([]);
  const [bandaMasVieja,setVieja] = useState({});
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBandas(data);
        masVieja(data);
      });
  }, []);
  const masVieja=(bandas)=>{
    let a=2022;
    let ban=bandas[0];
    for (var i = 0; i < bandas.length; i++) {
      if(bandas[i].foundation_year<a){
        a=bandas[i].foundation_year
        ban=bandas[i]
      }
    }
    setVieja(ban);
  }

 return (
    <div className="container">
    <table className="table">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            <FormattedMessage id="Name" />
          </th>
          <th scope="col">
          <FormattedMessage id="Country" /></th>
          <th scope="col">
          <FormattedMessage id="Genre" /></th>
          <th scope="col">
          <FormattedMessage id="Fundation" /></th>
        </tr>
      </thead>
      <tbody>
        {console.log("Bandas", bandas)}
        {bandas.map((banda, i) => (
          <Banda key={i} banda={banda}/>
        ))}
      </tbody>
    </table>
    <div>La banda más antigua es {bandaMasVieja.name} y fue fundada hace {2022-bandaMasVieja.foundation_year}</div>
  </div>
 );
}

export default ListarBandas;
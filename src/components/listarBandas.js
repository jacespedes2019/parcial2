import Banda from "./banda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";
import React, { useEffect, useState } from "react";

const ListarBandas = (props) => {
  const [bandas, setBandas] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBandas(data);
      });
  }, []);

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
  </div>
 );
}

export default ListarBandas;
import React from "react";
import { FormattedDate, FormattedNumber,FormattedMessage } from 'react-intl';
import { LinkContainer } from 'react-router-bootstrap';

const Banda = (props) => {
  return (
    <tr>
      <th scope="row">{props.banda.id}</th>
      <LinkContainer to={"/bandas/".concat(props.banda.id)}><td>
          {props.banda.name}
      </td></LinkContainer>
      <td>{props.banda.country}</td>
      <td>{props.banda.genre}</td>
      <td>{props.banda.foundation_year}</td>
    </tr>
  );
};

export default Banda;

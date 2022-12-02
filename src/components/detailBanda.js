import { useContext, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { roomContext } from "../App";
import { LinkContainer } from 'react-router-bootstrap';
import ListarBandas from '../components/listarBandas';

function DetailBanda() {
    const [banda, setBanda] = useState({});
    const [bandas, setBandas] = useState([]);
    const params = useParams();
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBandas(data);
                setBanda(data.find(obj => obj.id == params.bandaId));
            });
    }, [params.bandaId]);
    return (
        <Row>
            <Col>
                <ListarBandas/>
            </Col>
            <Col>
                <Card style={{ width: "15rem", height: "24rem" }} className="mb-3">
                    <Card.Img
                        style={{ height: "14rem" }}
                        variant="top"
                        src={banda.image}
                    />
                    <Card.Body>
                        <Card.Title>
                                {banda.name}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default DetailBanda;
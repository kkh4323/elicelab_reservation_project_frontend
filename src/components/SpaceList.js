import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const SpaceList = () => {
    const [spaces, setSpaces] = useState([])
    const getSpaceData = async () => {
        const {data, status} = await axios.get('https://localhost/api/space')
        if (status === 200) {
            setSpaces(data.body.data)
        }
    }
    console.log(spaces)
    const hostIp = '172.18.0.2'
    useEffect(() => {
        getSpaceData()
    }, []);
    return (
        <Container className={"mt-4"}>
            <Row>
                {spaces.map(space => (
                    <Col>
                        <Card style={{ width: '18rem' }} className={"mt-3"}>
                            <Card.Img style={{height: '250px'}} variant="top" src={space.spaceImgs[0].replace(hostIp, 'localhost')} />
                            <Card.Body>
                                <Card.Title><b>{space.name}</b></Card.Title>
                                <Card.Text>{space.description}</Card.Text>
                                <Card.Text>최대인원: {space.maxPeople}</Card.Text>
                                <Link to={`/space/${space.id}`}>
                                    <Button variant="primary">예약하기</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SpaceList;
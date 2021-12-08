import React from 'react';
import { Col, Card, Image, Row } from 'react-bootstrap';
import staticImage from '../static/pancakes.png'

const RecipeItem = () => {
  return (
    <div className="mt-5">
    <Col md={3}>
        <Card style={{ width: 350, cursor: "pointer"}} className="d-flex align-items-center" border={"dark"}>
          <Image width={150} height={150} src={staticImage}/>
          <div>
          <Row style={{ maxWidth: 345}}>
            <h4>Dish Name</h4>
            <text>
            Some Text
            </text>
          </Row>
          </div>
        </Card>
    </Col>
    </div>
  )
}

export default RecipeItem;

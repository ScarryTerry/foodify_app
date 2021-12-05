import React from 'react';
import { Col, Card, Image, Row } from 'react-bootstrap';
import staticImage from '../static/pancakes.png'

const RecipeItem = () => {
  return (
    <Col md={3}>
      <div>
        <Card style={{ width: 300, cursor: "pointer"}} className="d-flex align-items-center" border={"dark"}>
          <Image width={150} height={150} src={staticImage}/>
          <div>
          <Row style={{ maxWidth: 300}}>
            <h4>Dish Name</h4>
            <text>
            Some Text
            </text>
          </Row>
          </div>
        </Card>
      </div>
    </Col>
  )
}

export default RecipeItem;

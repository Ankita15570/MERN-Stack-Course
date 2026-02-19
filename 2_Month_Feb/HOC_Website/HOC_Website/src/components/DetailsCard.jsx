import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const DetailsCard = ({ CardTitle, CardDescription }) => {
  return (
    <>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.whattacraft.in/web/image/product.product/424/image_1920?unique=27180df"
          />
          <Card.Body>
            <Card.Title>{CardTitle}</Card.Title>
            <Card.Text>{CardDescription}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default DetailsCard;

import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bcard.css"

function BasicExample({imageUrl, title}) {

    return (
        <>
          <Card style={{ width: "18rem" }} className="d-inline-block mx-3 my-2 card-size">
            <Card.Img variant="top" src={imageUrl} className='crd-img'/>
            <hr />
            <Card.Body>
              <Card.Title className='fs-18'>{title}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </>
  )
}


export default BasicExample;

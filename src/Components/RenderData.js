import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Spinner
} from "reactstrap";
const RenderData = ({filter, elem}) => {

  const printData = () => {
    switch (filter) {
      case "products":
        return (
          <Card
            className="border border-dark mb-4"
            style={{
              width: "18rem",
              height: "28rem"
            }}
          >
            <img alt="Sample" src={elem.thumbnail} />
            <CardBody>
              <CardTitle tag="h5">{elem.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {elem.price}
              </CardSubtitle>
              <CardText>{elem.description}</CardText>
            </CardBody>
          </Card>
        );
      case "users":
        return (
          <Card
            className="border border-dark mb-4"
            style={{
              width: "18rem",
              height: "28rem"
            }}
          >
            <img alt="Sample" src={elem.image} />
            <CardBody>
              <CardTitle tag="h5">
                {`${elem.firstName} ${elem.lastName}`}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {elem.email}
              </CardSubtitle>
              <CardText>{elem.phone}</CardText>
            </CardBody>
          </Card>
        );
      case "quotes":
        return (
          <Card
            className="border border-dark mb-4"
            style={{
              width: "18rem",
              height: "18rem"
            }}
          >
            <CardBody>
              <CardTitle tag="h5">{elem.quote}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {elem.author}
              </CardSubtitle>
            </CardBody>
          </Card>
        );
    }
  };

  return (
    <div>{printData()}</div>
  )
}

export default RenderData
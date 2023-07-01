import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Spinner
} from "reactstrap";
const ApiComp = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("products");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const data = await fetch(`https://dummyjson.com/${filter}`);
    const json = await data.json();
    setData(filter === "products" ? json.products : json.users);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // (async () => {
    //   const data = await fetch("https://dummyjson.com/products");
    //   const json = await data.json();
    //   setData(json.products);
    // })();
  }, [filter]);

  console.log(data);

  return (
    <div>
      <div className="fs-2 mb-4">ApiComp</div>
      <div className="mt-3 mb-4">
        <Button
          color="primary"
          size="lg"
          className="me-3"
          onClick={() => setFilter("products")}
        >
          Products
        </Button>
        <Button color="success" size="lg" onClick={() => setFilter("users")}>
          Users
        </Button>
      </div>
      {loading ? (
        <div className="text-center">
          <Spinner className="m-5" color="primary">
            Loading...
          </Spinner>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          {data.length > 0 &&
            data.slice(0, 10).map((elem, idx) => (
              <div key={idx}>
                <Card
                  className="border border-dark mb-4"
                  style={{
                    width: "18rem",
                    height: "28rem"
                  }}
                >
                  <img alt="Sample" src={elem.thumbnail || elem.image} />
                  <CardBody>
                    <CardTitle tag="h5">
                      {elem.title || `${elem.firstName} ${elem.lastName}`}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {elem.price || elem.email}
                    </CardSubtitle>
                    <CardText>{elem.description || elem.phone}</CardText>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ApiComp;

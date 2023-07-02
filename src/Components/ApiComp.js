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
import RenderData from "./RenderData";
const ApiComp = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("products");
  const [loading, setLoading] = useState(false);

  const filterData = (json) => {
    // if(filter === "products") {
    //   return json.products
    // } else if( filter === "users") {
    //   return json.users
    // }

    // :TODO -- Add a new route and render its data
    switch (filter) {
      case "products":
        return json.products;
      case "users":
        return json.users;
      case "quotes":
        return json.quotes;
      default:
        return;
    }
  };

  async function fetchData() {
    setLoading(true);
    const data = await fetch(`https://dummyjson.com/${filter}`);
    const json = await data.json();
    setData(filterData(json));
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

  return (
    <div>
      {/* <div className="fs-2 mb-4">ApiComp</div> */}
      <div className="mt-3 mb-4">
        <Button
          color="primary"
          size="lg"
          className="me-3"
          outline={filter !== "products"}
          onClick={() => setFilter("products")}
        >
          Products
        </Button>
        <Button
          className="me-3"
          color="success"
          size="lg"
          onClick={() => setFilter("users")}
          outline={filter !== "users"}
        >
          Users
        </Button>
        <Button
          color="info"
          size="lg"
          onClick={() => setFilter("quotes")}
          outline={filter !== "quotes"}
        >
          Quotes
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
                <RenderData elem={elem} filter={filter} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ApiComp;

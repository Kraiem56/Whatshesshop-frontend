import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./_popular.css";
import { Loader } from "../../common";

export default class PopularProducts extends Component {
  constructor() {
    super();
    this.state = {
      topProduct: null,
    };
  }
  componentDidMount() {
    axios
      .get(`/api/products/top/product`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          topProduct: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { topProduct } = this.state;

    if (topProduct === null) {
      return <Loader />;
    }
    return (
      <>
        <h2>Popular Product</h2>

        <Row>
          <Col>
            <Link to={`/product/${topProduct[0]._id}`}>
              <img src={topProduct[0].image} className='top_0_product' alt={topProduct[0].image} />
              <h5 style={{ position: "absolute", right: 30, bottom: 20 }}>
                Shop Now
              </h5>
            </Link>
          </Col>
          <Col>
            <Link to={`/product/${topProduct[1]._id}`}>
              <div>
                <img src={topProduct[1].image} className='top_1_product' alt={topProduct[1].image}/>
                <h5 style={{ position: "absolute", right: 30, bottom: 290 }}>
                  Shop Now
                </h5>
              </div>
            </Link>
            <Link to={`/product/${topProduct[2]._id}`}>
              <div>
                <img src={topProduct[2].image} className='top_1_product' alt={topProduct[2].image}/>
                <h5 style={{ position: "absolute", right: 30, bottom: 20 }}>
                  Shop Now
                </h5>
              </div>
            </Link>
          </Col>
        </Row>
      </>
    );
  }
}

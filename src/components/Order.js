import React, { Component } from 'react'

import {Col, Row} from "react-bootstrap"
import {API_ORDER, API_PAYMENT} from '../utils/constants'
import axios from 'axios'

export default class Order extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products : [],
    }
  }
  
  componentDidMount(){
    axios.get(API_ORDER+"product")
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(error => {
        console.log(error)
      })
  
  }
  render() {
    const {products} = this.state
    console.log(products)
    return (
      <div className="App">
      <Row>
        <Col>
          <h4><strong>Daftar Produk</strong></h4>
          <hr />
          <Row>
            <ul>
            {products && products.map((product) =>(
              <li>product : {product.name} <br /> price : {product.price}</li>
            ))}
            </ul>
          </Row>
        </Col>
      </Row>
    </div>
    )
  }
}

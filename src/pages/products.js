import React from 'react'
import Gallery from '../components/ProductGallery'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
const SecondPage = () => (
  <Layout>
    <div>
      <Helmet title={'Products'} />
      <Container>
        <Row>
          <Col>
            <h1>Products</h1>
            <p> We have a wide range of products including </p>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default SecondPage

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
const SecondPage = () => (
  <Layout>
    <div>
      <Helmet title={'Christmas Trees near Reigate'} />
      <Container>
        <Row>
          <Col>
            <h1>Christmas Trees</h1>
            <p> Join us for an extra special Christmas at Buckland Nurseries</p>
            <p>
              Large selection of Christmas trees from 3ft to 10ft: Nordman
              low-drop and traditional Norway Spruce.
            </p>
            <p> Open Every Day until Christmas. </p>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default SecondPage

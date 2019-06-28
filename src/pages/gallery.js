import React from 'react'
import Gallery from '../components/ImageGallery'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
const SecondPage = () => (
  <Layout>
    <div>
      <Helmet title={'Photo Gallery'} />
      <Container>
        <Row>
          <Col>
            <h1>Photo Gallery </h1>
            <p> A selection of images from around our garden centre</p>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default SecondPage

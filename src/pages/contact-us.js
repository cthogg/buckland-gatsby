import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
const SecondPage = () => (
  <Layout>
    <div>
      <Helmet title={'Contact Us'} />
      <Container>
        <Row>
          <Col>
            <h1>Contact Us</h1>
            <p> Please feel free to contact us with any query</p>
            <p> Telephone: 01737 242990 </p>
            <p> Fax: 01737 249044 </p>
            <p>
              {' '}
              Email:{' '}
              <a
                className={'black-link'}
                href="mailto:david@bucklandnurseries.co.uk"
              >
                {' '}
                david@bucklandnurseries.co.uk
              </a>{' '}
            </p>
            <p>
              {' '}
              We also publish a{' '}
              <a
                className={'black-link'}
                href="http://www.bucklandsurrey.net/local-businesses/buckland-nurseries/"
              >
                monthly gardening advice column
              </a>{' '}
              on the Buckland Parish Website.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default SecondPage

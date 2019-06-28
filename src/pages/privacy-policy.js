import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const PrivacyPolicy = () => (
  <Layout>
    <div>
      <Helmet title={'Privacy Policy'} />
      <Container>
        <Row>
          <Col>
            <h1>Privacy Policy</h1>
            <p> We hope you enjoy using the Buckland Nurseries Website</p>
            <p>
              {' '}
              Your privacy is important to us. It is Buckland Nurseries' policy
              to respect your privacy regarding any information we may collect
              from you across our website, bucklandnurseries.co.uk.
            </p>
            <p>
              {' '}
              Buckland Nurseries uses Google Analytics and the Google Maps
              widget to enhance the website's functionality. These collect
              cookies and a small amount of usage data.{' '}
            </p>
            <p>
              {' '}
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
            <p>
              {' '}
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default PrivacyPolicy

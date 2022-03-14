import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const CentredContainer = styled(Container)`
  text-align: center !important;
`
const apiUrl = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq73OvWDkdUgRfvRFO9GkPA4&key=${
  process.env.GATSBY_GOOGLE_MAPS_API
}&zoom=14`
const VisitUs = () => (
  <Layout>
    <div>
      <Helmet title={'Visit Us'} />
      <CentredContainer>
        <h1>Visit Us</h1>
        <Row>
          <Col md="8">
            <h3> Location</h3>
            <p> You can find us on the A25 between Reigate and Dorking.</p>
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              src={apiUrl}
              allowFullScreen
              title={'Map of Buckland Nurseries'}
            />{' '}
          </Col>
          <Col md="4">
            <h2> Opening Times </h2>
            <p> We are open 7 days a week </p>
            <p> Monday to Saturday: 8:30-5:00pm </p>
            <p> Sunday: 9:00am - 4:30pm </p>
            <h3> Address </h3>
            <p> Reigate Road (Main A25), Buckland, Surrey RH2 9RE </p>
          </Col>
        </Row>
      </CentredContainer>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default VisitUs

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'

const UnderlinedLink = styled(Link)`
  text-decoration: underline;
`

export default class Footer extends React.Component {
  render() {
    return (
      <Container className={'footer'}>
        <Row>
          <Col xs="12" sm="4">
            <h3> Address</h3>
            <p>
              Reigate Road (Main A25), <br />
              Buckland,<br />
              Surrey <br />
              RH2 9RE <br />
              <UnderlinedLink to="/visit-us"> Map </UnderlinedLink> <br />
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3> January Opening Times</h3>
            <p>
              {' '}
              Monday to Saturday: <br />
              08:30am - 5:00pm <br />
              Sunday: <br />
              9:00am - 5:00pm{' '}
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3> Contact Us </h3>
            <p>
              Tel: 01737 242990 <br />
              Fax: 01737 249044 <br />
              Email:
              <a href="mailto:david@bucklandnurseries.co.uk">
                {' '}
                david@bucklandnurseries.co.uk
              </a>{' '}
              <br />
              <UnderlinedLink to="/privacy-policy">
                {' '}
                Privacy Policy{' '}
              </UnderlinedLink>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

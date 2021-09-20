import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'
import { Col, Container, Row, Table } from 'reactstrap'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const StyledImg = styled(Img)`
  @media (max-width: 600px) {
    && {
      width: 30vw;
      max-height: 150px;
      max-width: 205px;
    }
  }
`
/* eslint-disable */
const StyledTable = styled(Table)`
  left: 0;
  right: 0;
  margin: auto;
  @media (min-width: 700px) {
    && {
      max-width: 1000px;
    }
  }
  > tr {
    > :hover {
      background-color: lightGrey;
    }
  }
`

const StyledLink = styled(Link)`
  color: blue !important;
  text-decoration: underline;
`

/* eslint-enable */
//FIXME: remove this.props.data from below
export default class IndexPage extends React.Component {
  render() {
    const specialAnnouncement = true
    const specialAnnouncementTitle = 'Update On Coronavirus (COVID-19) '

    const times = [
      {
        date: 'Thursday 24th',
        title: '-',
        times: '09:00 - 13:00',
      },
      {
        date: 'Christmas Day',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Boxing Day',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Sunday 27th',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Monday 28th',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Tuesday 29th',
        title: '-',
        times: '10:00-13:00',
      },
      {
        date: 'Wednesday 30th',
        title: '-',
        times: '10:00 - 13:00',
      },
      {
        date: 'Thursday 31st',
        title: '-',
        times: 'Closed',
      },
      {
        date: "New Year's Day",
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Saturday 2nd Jan',
        title: '-',
        times: 'Closed',
      }, {
        date: 'Sunday 3rd Jan',
        title: '-',
        times: 'Closed',
      }, {
        date: 'Monday 4th Jan',
        title: '-',
        times: 'Open as usual',
      }
    ]
    const specialAnnouncementDiv = <div style={{ textAlign: 'left' }}>
      <p> For the safety our our staff and customers:  </p>
      <ul>

        <li>
          We have introduced a range of measures in order to comply with Government regulations and advice, and ask that you respect social distancing with our staff and other customers.
      </li>
        <li>
          In accordance with Government advice, please do not visit if you are unwell or likely to cough. In order to protect our staff and customers, please take care not to cough on site </li>
        <li>
          Please wear face masks inside and use the hand sanitiser provided.       </li>
      </ul>
      <p> We now have good stocks again of compost, bedding plants, perennials and shrubs. We look forward to welcoming you and seeing you soon ! </p>
    </div >
    return (
      <Layout>
        <div>
          <Helmet title={`Buckland Nurseries Garden Centre`} />

          <Container className={'index'}>
            <Container className={'center'}>
              <Row>
                <Col xs="12">
                  <MediaQuery query="(max-width: 600px)">
                    <StyledImg
                      fixed={this.props.data.imageOneMob.childImageSharp.fixed}
                    >
                      {' '}
                    </StyledImg>
                  </MediaQuery>
                  <MediaQuery query="(min-width: 600px)">
                    <StyledImg
                      fixed={this.props.data.imageOne.childImageSharp.fixed}
                    >
                      {' '}
                    </StyledImg>
                  </MediaQuery>
                </Col>
              </Row>
              <h1> {`Welcome to Buckland Nurseries Garden Centre`}</h1>
            </Container>
            <p>
              {' '}
              Situated on the A25 between Reigate and Dorking, we are a family
              garden centre established over 150 years ago. The business was
              founded by Thomas Hogg in 1865 and has continued over six
              generations of the Hogg family as Thomas Hogg & Son Limited. We stock a wide range of
              perennials, trees, shrubs, bedding plants, roses, herbs, garden
              sundries, tools, turf, seeds, paving and gravels. We look forward
              to welcoming you to our traditional Garden Centre.{' '}
            </p>

            {specialAnnouncement && (
              <div
                style={{
                  border: '5px solid red',
                  marginBottom: 2,
                }}
              >
                <h2
                  style={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  {specialAnnouncementTitle}{' '}
                </h2>
                <Container className={'center'}>
                  <Row>
                    <Col xs="12">
                      {/* <StyledTable>
                        {times.map((time, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td> {time.date}</td>
                              <td>{time.title}</td>
                              <td>{time.times}</td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </StyledTable> */}
                      <p> {specialAnnouncementDiv}</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </Container>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
        markdownRemark {
        frontmatter {
        title
        times
        specialTimes
        specialTimesTitle
      }
      html
    }
    imageOne: file(relativePath: {eq: "1300_600/entrance.jpg" }) {
        childImageSharp {
        fixed(width: 650, height: 300) {
        ...GatsbyImageSharpFixed
      }
      }
    }
    imageOneMob: file(relativePath: {eq: "1300_600/entrance.jpg" }) {
        childImageSharp {
        fixed(width: 325, height: 150) {
        ...GatsbyImageSharpFixed
      }
      }
    }
    christmasFlyer: file(
      relativePath: {eq: "christmas_flyer_2019_compressed.jpg" }
    ) {
        childImageSharp {
        fixed(width: 325, height: 150) {
        ...GatsbyImageSharpFixed
      }
      }
    }
  }
`

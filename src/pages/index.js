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
    const timesT = JSON.parse(this.props.data.markdownRemark.frontmatter.times)
    const {
      specialTimesT,
      specialTimesTitleT,
    } = this.props.data.markdownRemark.frontmatter
    const specialTimesTitle = 'Christmas Opening Times'
    const specialTimes = true
    const times = [
      {
        date: '24th December',
        title: '-',
        times: '08:30 - 14:30',
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
        date: 'Friday 27th',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Saturday 28th',
        title: '-',
        times: '09:00 - 14:00',
      },
      {
        date: 'Sunday 29th',
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Monday 30th',
        title: '-',
        times: '09:00 - 14:00',
      },
      {
        date: 'Tuesday 31st',
        title: '-',
        times: '09:00 - 14:00',
      },
      {
        date: "New Year's Day",
        title: '-',
        times: 'Closed',
      },
      {
        date: 'Thursday 2nd Jan',
        title: '-',
        times: '08:30 - 17:30 (as normal)',
      },
    ]
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
            {specialTimes && (
              <React.Fragment>
                <h2> {specialTimesTitle} </h2>
                <Container className={'center'}>
                  <Row>
                    <Col xs="12">
                      <StyledTable>
                        {times.map((time, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td> {time.date}</td>
                              <td>{time.title}</td>
                              <td>{time.times}</td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </StyledTable>
                    </Col>
                  </Row>
                </Container>
              </React.Fragment>
            )}

            <p>
              {' '}
              Situated on the A25 between Reigate and Dorking, we are a family
              garden centre established over 150 years ago. The business was
              founded by Thomas Hogg in 1865 and has continued over six
              generations of the Hogg family. We stock a wide range of
              perennials, trees, shrubs, bedding plants, roses, herbs, garden
              sundries, tools, turf, seeds, paving and gravels. We look forward
              to welcoming you to our traditional Garden Centre.{' '}
            </p>
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
    imageOne: file(relativePath: { eq: "1300_600/entrance.jpg" }) {
      childImageSharp {
        fixed(width: 650, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageOneMob: file(relativePath: { eq: "1300_600/entrance.jpg" }) {
      childImageSharp {
        fixed(width: 325, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    christmasFlyer: file(
      relativePath: { eq: "christmas_flyer_2019_compressed.jpg" }
    ) {
      childImageSharp {
        fixed(width: 325, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

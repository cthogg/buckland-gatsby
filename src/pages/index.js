import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'
import { Col, Container, Row, Table } from 'reactstrap'
import styled from 'styled-components'
import Layout from '../components/layout'

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

/* eslint-enable */
//FIXME: remove this.props.data from below
export default class IndexPage extends React.Component {
  render() {
    const times = JSON.parse(this.props.data.markdownRemark.frontmatter.times)
    const {
      specialTimes,
      specialTimesTitle,
    } = this.props.data.markdownRemark.frontmatter

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
                        {times.times.map((time, index) => (
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
  }
`

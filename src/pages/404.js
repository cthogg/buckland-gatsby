import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledLink = styled(Link)`
  color: black !important;
  text-decoration: underline !important;
`

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1> 404 NOT FOUND</h1>
      <p> The page you requested cannot be found</p>
      <p>
        {' '}
        Please go to our{' '}
        <StyledLink className={'black-link'} to="/">
          homepage
        </StyledLink>{' '}
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

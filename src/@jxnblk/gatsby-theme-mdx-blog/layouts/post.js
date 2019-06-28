import React from 'react'
import { css, Styled, Main } from 'theme-ui'
import Container from '@jxnblk/gatsby-theme-mdx-blog/src/container'
import Head from '@jxnblk/gatsby-theme-mdx-blog/src/head'
import Root from '@jxnblk/gatsby-theme-mdx-blog/src/root'
import Header from '@jxnblk/gatsby-theme-mdx-blog/src/header'
import Footer from '@jxnblk/gatsby-theme-mdx-blog/src/footer'
import { Link } from 'gatsby'

export default props => {
  return (
    <Root>
      <Head title={props.title} description={props.excerpt} />
      <Header />
      <Main>
        <Container
          css={css({
            variant: 'layout.container',
          })}
        >
          <Styled.h1>{props.title}</Styled.h1>
          <Styled.p
            css={css({
              fontWeight: 'bold',
            })}
          >
            {props.date}
          </Styled.p>
          {props.children}

          <Link to="/blog">
            {' '}
            <Styled.p
              css={css({
                color: '#406e06',
                textDecoration: 'underline',
              })}
            >
              {' '}
              All posts{' '}
            </Styled.p>{' '}
          </Link>
        </Container>
      </Main>
      <Footer />
    </Root>
  )
}

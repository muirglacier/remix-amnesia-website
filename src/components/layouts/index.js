import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import GitHubButton from 'react-github-btn'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
`

export default ({ children }) => (
  <>
    <Helmet>
      <title>{`Ethereum Amnesia IDE - Why tell Mark if you do not have to?`}</title>
      <link
        rel={'stylesheet'}
        href={
          'https://fonts.googleapis.com/css?family=Lato:400|700|Noto+Sans:700|Roboto+Mono:500&display=swap'
        }
      />
    </Helmet>
    <GlobalStyle />
    {children}
    <GitHub>
      <GitHubButton
        href={'https://github.com/muirglacier/remix-amnesia-project'}
        data-size={'large'}
        data-show-count={'true'}
        aria-label={'Star us on GitHub'}
      >
        Star
      </GitHubButton>
    </GitHub>
  </>
)

const GitHub = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`

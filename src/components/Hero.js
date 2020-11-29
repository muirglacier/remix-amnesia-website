import React, { useState } from 'react'
import styled from 'styled-components'
import PrismCode from 'react-prism'

import Nav from './Nav'
import Modal from './Modal'
import Logo from './Logo'

import bg from './../assets/bg-circle-network.svg'
import screenshot from './../assets/OhHiMark.png'

export default () => {
  const [modal, setModal] = useState(false)

  return (
    <Hero>
      <Nav setModal={setModal} />
      {modal ? <Modal open={setModal} /> : null}
      <Logo />
      <Content>
        <Description>
          A Fully Offline and Self-Contained Ethereum IDE{' '}
        </Description>
        <Text>... that is not connected to Medium, Twitter, Google, Swarm and IPFS!</Text>
        <ImageHolder><img src={screenshot}/></ImageHolder>
      </Content>
    </Hero>
  )
}

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  padding: 5rem 6rem;
  background-image: url(${bg}),
    linear-gradient(-135deg, #bf37ff 0, #ff6a85 50%, #fe9c5a 80%);
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 95%, cover;
  box-sizing: border-box;
  color: #fff;
  padding-top: 8rem;

  @media (min-width: 768px) {
    padding: 10rem 12rem;
    background-position: center;
  }
`

const Content = styled.div`
  margin-top: 8rem;
`

const ImageHolder = styled.div`
  display: block;
  text-align: center;
  padding-top: 30px;
  img{
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
`

const Description = styled.h2`
  font-size: 2.8rem;
  text-align: center;

  span {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3.4rem;

    span {
      font-size: 3.4rem;
    }
  }
`

const Text = styled.p`
  font-size: 1.8rem;
  margin-top: 0.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const Install = styled.div`
  margin-top: 5rem;
  font-size: 1.6rem;
  background: #272721;
  color: whitesmoke;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);
  font-family: 'Roboto Mono', monospace;

  @media (min-width: 768px) {
    display: none;
  }
`

const InstallDesktop = styled.div`
  display: none;
  justify-content: center;

  pre {
    display: inline-flex;
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
    box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    display: flex;
  }

  @media (min-width: 1024px) {
    pre {
      font-size: 1.4rem;
    }
  }
`

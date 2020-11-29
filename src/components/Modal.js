import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import icon from '../assets/x-circle.svg'

export default ({ open }) => {
  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: `translateY(-50px)` },
    opacity: 1,
    transform: `translateY(0)`
  })

  return (
    <Modal style={{ opacity, transform }}>
      <Close onClick={() => open(false)}>
        <Icon icon={icon} />
      </Close>
      <Title>
        Why Remix Amesia IDE?{' '}
        <span role={'img'} aria-label={'thinking'}>
          🤔
        </span>{' '}
      </Title>
      <Body>
        Every time you use the original Remix IDE (or Remix Desktop) there is a whole bunch of questionable network traffic that may identify/track you at best, and submit your contracts to "the Cloud" in the worst case. This includes:
      </Body>
      <List>
        <Item>Connections to twitter.com (why, for f**s sake?)</Item>
        <Item>Connections to fontawesome.com</Item>
        <Item>Connections to cloudinary.com</Item>
        <Item>Connections to googleapis.com</Item>
        <Item>Connections to gstatic.com</Item>
        <Item>Connections to retainable.com (RSS feeds)</Item>
        <Item>Connections to rss2json.com</Item>
        <Item>Connections to twimg.com</Item>
        <Item>Connections to githubusercontent.com</Item>
        <Item>Connections to IPFS, Swarm, and other useless rubbish</Item>
      </List>
      <Body>
        Furthermore, there are some pretty dangerous buttons, which are huge in size so thus can be easily clicked by acceident. Those will not ask you for any confirmation and just upload your smart contract source codes to IPFS or Swarm. Even when testing locally (using ganache), the "publish to IPFS" checkbox is checked by default. We say NO to this! Remix Amnesia IDE is self-contained, comes with bundled compilers, does not query Twitter or anybody else and has no IPFS/Swarm support. You are offline, and Mark is none the wiser.
      </Body>
    </Modal>
  )
}

const Modal = styled(animated.div)`
  position: absolute;
  top: 25%;
  left: 5%;
  right: 5%;
  background: white;
  color: #666;
  padding: 3rem 4rem;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.65);

  @media (min-width: 768px) {
    top: 28%;
    left: 10%;
    right: 10%;
  }

  @media (min-width: 1024px) {
    top: 28%;
    left: 25%;
    right: 25%;
  }
`

const Title = styled.h5`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 2.4rem;

  span {
    font-size: 2.4rem;
  }
`

const Body = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  span {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const List = styled.div`
  margin-top: 2rem;
`

const Text = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const Item = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  &:last-child {
    margin: 0;
  }
`

const Close = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: ${props => `url(${props.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

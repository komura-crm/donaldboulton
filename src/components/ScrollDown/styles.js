import styled from '@emotion/styled'
import { BsArrowDownCircle as Down } from 'react-icons/bs'

export const Arrow = styled(Down)`
  z-index: 2;
  background: transparent;
  color: #777;
  border-radius: 50%;
  transition: 0.3s;
  position: fixed;
  top: 20vh;
  :hover {
    transform: scale(1.15);
    background: transparent;
  }
  right: calc(1.8vw - 1em / 1);
`
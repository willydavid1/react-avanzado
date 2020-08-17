import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 35%;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  margin-left: auto;

  &:hover {
    background: transparent;
    border: 1px solid #8d00ff;
    color: #8d00ff;
    width: 50%;
  }

  &[disabled] {
    opacity: .3;
  }
`

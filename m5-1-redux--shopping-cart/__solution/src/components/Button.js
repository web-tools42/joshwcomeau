import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 4%;
    top: 2px;
    width: 92%;
    height: 10px;
    border-radius: 30%;
    background: linear-gradient(
      180deg,
      hsla(326deg, 100%, 80%, 0.5),
      hsla(326deg, 100%, 80%, 0)
    );
  }
`;

export default Button;

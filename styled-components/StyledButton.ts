import styled from "styled-components";

const StyledButton = styled.button`
  background: #1c2b3a;
  border-radius: 8px;
  padding: 10px 14px;
  border: none;
  font-weight: 250;
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 1440px) {
    &:hover {
      color: #5565e8;
      transition: 0.5s;

      a {
        color: #5565e8;
        transition: 0.5s;
      }
    }
  }
`;

export default StyledButton;

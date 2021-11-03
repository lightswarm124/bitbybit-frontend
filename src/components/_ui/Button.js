import styled from "@emotion/styled";

const Button = styled.a`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  margin-right: 1.5rem;
  color: white;
  background-color: ${(props) =>
    props.variant === "primary" ? "#480EF2" : "transparent"};
  border: ${(props) =>
    props.variant === "primary" ? "none" : "2px solid #480EF2"};
  text-decoration: none;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

export default Button;

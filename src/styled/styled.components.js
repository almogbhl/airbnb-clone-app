import styled from "styled-components";
import * as c from "./constants";

// common styled-components
export const Section = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const DivBorder = styled.div`
  display: ${props => (props.show ? "none" : "block")};
  margin: 2.5rem 0;
  border: 0.5px solid ${c.lightGrey};
  width: 100%;
  height: 0px;
`;

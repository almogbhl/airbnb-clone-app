import styled from "styled-components";
import { flexbox } from "./functions";
import * as c from "./constants";

// common styled-components
export const Section = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const DivBorder = styled.div`
  margin: 2.5rem 0;
  border: 0.5px solid ${c.lightGrey};
  width: 100%;
  height: 0px;
`;

// export const VBox = styled.div`
//     ${ flexbox({d:'column'}) }
// `;
// export const HBox = styled.div`
//     ${ flexbox() }
// `;
// export const Header = styled.h1`
//     font-size: 5rem;
//     font-weight:normal;
//     font-family: 'Griffy', cursive;
//     text-align: center;
//     color: ${ c.darkBlue };
// `;
// export const Subtitle = styled.h2`
//     font-size: 4rem;
//     font-weight:400;
//     font-family: 'Yanone Kaffeesatz', sans-serif;
//     color: ${ c.darkBlue };
// `;
// export const Button = styled.button`
//     outline-style: none;
//     border-style: none;
//     background: ${ c.pink };
//     text-transform: uppercase;
//     color: white;
//     font-size: 2.8rem;
//     padding: 1rem 2rem;
//     border-radius: .5rem;
//     cursor: pointer;
//     font-family: 'Yanone Kaffeesatz', sans-serif;

//     &:hover{
//         background:${ darken(.1, c.pink) }
//     }
//     &:active{
//         background:${ lighten(.1, c.pink) }
//     }
// `;

// export const Hline = styled.div`
//     border : 0;
//     height: 2px;
//     width:100%;
//     margin-top: 3rem;
//     margin-bottom: 3rem;
//     background: linear-gradient(to right, rgba(46,154,199, 0), rgba(46,154,199, 1), rgba(46,154,199, 0));
// `;

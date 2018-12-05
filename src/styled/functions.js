// common functions...
//------------------------
//  the flexbox function I've created accepts a single object parameter
//  then destructure the wanted keys from it
//  this technique allows you to pass function parameters in any order 
//  and have defaults for the rest
export const flexbox = ( {d='row',j='center',a='center'} = {} )=>`
    display:flex;
    flex-direction:${d};
    justify-content:${j};
    align-items:${a};     
`;
export const drawBorder = ({c='red',s='solid',w='1px'}={})=>`
    border:${c} ${s} ${w};     
`;
// common functions...

export const flexbox = ( {d='row',j='center',a='center'} = {} )=>`
    display:flex;
    flex-direction:${d};
    justify-content:${j};
    align-items:${a};     
`;
export const drawBorder = ({c='red',s='solid',w='1px'}={})=>`
    border:${c} ${s} ${w};     
`;
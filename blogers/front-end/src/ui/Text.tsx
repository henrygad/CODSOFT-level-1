import tw from "tailwind-styled-components";


export const H2 = tw.h2`
    font-secondary
    text-2xl
    md:text-3xl
    font-semibold
    first-letter:capitalize
    text-wrap
`
export const H3 = tw.h3`
    font-text
    text-[.8rem]
    first-letter:capitalize
`
export const H4 = tw.h4`
    font-secondary
    font-bold
    first-letter:capitalize
`
export const P = tw.p`
    font-text 
    text-sm
    sm:text-base
    first-letter:capitalize
    text-wrap
`
export const Psm = tw.p`
    font-secondary
    text-sm
    md:text-base
    font-semibold
    text-wrap
`
export const Pdefault = tw.p`
 font-secondary 
 text-wrap
`
export const Pdate = tw.p`
font-secondary 
text-[.8rem] text-slate-600
text-wrap
`
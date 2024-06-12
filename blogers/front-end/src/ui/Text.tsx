import tw from "tailwind-styled-components";

export const H1 = tw.h1`
    font-primary 
    text-3xl 
    md:text-4xl
    font-bold
    text-green-800
    capitalize
`
export const H2 = tw.h2`
    font-primary
    text-2xl
    md:text-3xl
    font-semibold
    first-letter:capitalize
`
export const H3 = tw.h3`
    font-text
    text-[.8rem]
    first-letter:capitalize
`
export const H4 = tw.h4`
    font-secondary
    first-letter:capitalize
    font-bold
    first-letter:capitalize
`
export const P= tw.p`
    font-text 
    text-sm
    sm:text-base
    text-stone-600
    first-letter:capitalize
`
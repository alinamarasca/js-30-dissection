export const calcShadow = (xWalk, yWalk) => {
return `
${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
`
};


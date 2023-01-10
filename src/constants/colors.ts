const colors = {
    white: '#FFFFFF',
    black: '#000000',
    turquoise: '#3e9697',
    lightGray: '#c3c6ca',
    gray: '#86898d',
    darkGray: '#4a4a4a',
    lightBlue: '#0057dc',
    blue: '#0000aa',
    darkBlue: '#173267',
    red: '#ff0000',
    peach:'#dbccaa',
    plum: '#665f70',
    burgundy:'#7a3941'


} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;
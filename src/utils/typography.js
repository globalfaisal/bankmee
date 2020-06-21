import Typography from 'typography'

export const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    { name: 'Open Sans', styles: [300, 400, 700] },
    { name: 'Public Sans', styles: [300, 400, 700] },
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Public Sans', 'sans-serif'],
  headerColor: 'hsl(233, 26%, 24%)',
  bodyColor: 'hsl(233, 5%, 55%)',
  headerWeight: 400,
  bodyWeight: 300,
  boldWeight: 700,
})

export default typography

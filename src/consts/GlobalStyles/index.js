export default {
  paddingTop: 20,
  paddingBottom: 30,

  textRegular: (fontSize = '12px', color = 'blue', textAlign = 'left') => {
		return {
			fontSize: fontSize,
			color: color,
			textAlign: textAlign,
			letterSpacing: 0.3,
		};
  },
  
  card: {
    boxShadow: '2px 3px 33px 0px rgba(0,0,0,0.75)',
    padding: '20px',
    borderRadius: '20px'
	}
}
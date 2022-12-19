import styled from "styled-components";
import bgWhite from '../assets/images/backgroundwhite.png'

export const lightTheme = {

    color: "#0e14e",
    backgroundColor: "#D3D4E6",
  
    button: {
  
      textColor: "#D3D4E6",
      borderColor: "#151A69",
      backgroundColor: "#151A69",
  
    },
  };

export const ContentBg = styled.div`
width: 100%;
height: 100%;
  background-image: (${bgWhite})
`
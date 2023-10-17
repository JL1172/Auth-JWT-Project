import styled from "styled-components"

export const StyledSettings = styled.div`
height : 100vh;
width : 100%;
display : flex;
justify-content : flex-start;
flex-direction : column;
align-items : center;
background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
 background-blend-mode: screen;

 form {
/* 
    border : 2px solid white; */
    display : flex;
    opacity : 1;
    flex-direction : column; 
    justify-content  : space-evenly;
    align-items : center;

    width : 25rem;
    height : 70vh;

    position : relative;

    background-color : transparent;
}
input[type=text], input[type=password], #in {

border : none;
outline : 2px solid white;
width : 17rem;
font-family: 'Montserrat', sans-serif;
z-index : 2;
height : 2rem;
color : black;
padding-left : .3rem; 
border-radius : 5px;
background-color : transparent;
transition : .1s ease-in-out;

&:hover {
    outline-color : gray;
    transition : .2s ease-in-out;
}
&:focus {
    border : none;
    outline-offset : 5px;
    transition: .1s ease-in-out; ;
}
}
#sub {
    border : none;
    outline : 2px solid white;
    outline-offset : 4px;
    width : 17rem;
    font-family: 'Montserrat', sans-serif;
    z-index : 2;
    height : 2rem;
    color : black;
    padding-left : .3rem; 
    border-radius : 5px;
    
    background-color : white;

    transition : 50ms ease-in-out; 
    &:hover {
       color : white;
       background-color : black;
       transition : .1s ease-in-out; 
    }    
    &:active {
        transform : scale(110%);
        border : none;
        outline-offset : 2rem;
        transition : .1s ease-in-out !important; 
    }
}
.eyeContainer {
    position : relative;

    .visible {
        position : absolute;
        right : 2px;
        top : 3px;
        cursor: pointer;
        z-index : 2;
    }
}
`
import styled from "styled-components";
import { keyframes } from "styled-components";

const topToRight = keyframes`
0%{
    transform : scaleX(3000%);
    opacity : 1;
} 
100% {
    transform : translateX(24.6rem); 
    opacity : 0;
}
`
const topToBottom = keyframes`
0%{
    opacity : 1;
    transform : scaleY(3000%);
} 
100% {
    transform : translateY(69vh); 
    opacity : 0;
}
`
const bottomToLeft = keyframes`
0%{
    opacity : 1;
    transform : scaleX(3000%);
} 
100% {
    transform : translateX(-24.6rem); 
    opacity : 0;
}
`
const leftToTop = keyframes`
0%{
    opacity : 1;
    transform : scaleY(3000%);
} 
100% {
    transform : translateY(-69vh); 
    opacity : 0;
}
`
const frame = keyframes`
0%{

}
100%{
    transform : scale(1.1); 
}
`


const fadeIn = keyframes`
0% {

}
100% {
    opacity  : 100%;
}
`
const fadeIn2 = keyframes`
0% {

}
100% {
    transform : scale(100%); 
}
`

const fallingDrop = keyframes`
0%{
    transform : rotateZ(180deg); 

}
50% {

}
100%{
    transform :   translateY(90vh); 

    opacity : 0;
}
`

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`


export const StyledLogin = styled.div`
height : 100vh;

background-color : #36454f;
display : flex;
justify-content : center;
align-items : center;
width : 100%;
background-image: radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% );

animation : ${gradient} 10s infinite;
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

    animation : ${frame} 1s ease-in-out forwards;
    animation-delay : 1.8s;

    background-color : transparent;
}
#grid1 {
    position : absolute;
    border : 2px solid white;  
    box-shadow : 0 0 2em white;
    transform-origin : left;
    opacity : 0;
    left : 0;
    top : 0;
    animation : ${topToRight} .5s ease-in-out forwards;
}
#grid2 {
    position : absolute;
    transform-origin : top;
    border : 2px solid white;  
    opacity : 0;
    box-shadow : 0 0 2em white;
    right : 0;
    top : 0;
    animation : ${topToBottom} 1s ease-in-out forwards;
    animation-delay : .5s;
}
#grid3 {
    position : absolute;
    transform-origin : right;
    border : 2px solid white;  
    opacity : 0;
    box-shadow : 0 0 2em white;
    bottom : 0;
    right : 0;
    animation : ${bottomToLeft} .5s ease-in-out forwards;
    animation-delay : 1s;
}
#grid4 {
    position : absolute;
    transform-origin : bottom;
    border : 2px solid white;  
    opacity : 0;
    box-shadow : 0 0 2em white;
    bottom: 0;
    left : 0;
    animation : ${leftToTop} 1s ease-in-out forwards;
    animation-delay : 1.5s;
}

input[type=text], input[type=password], #in {

    border : none;
    outline : 2px solid white;
    width : 17rem;
    font-family: 'Montserrat', sans-serif;
    z-index : 2;
    height : 2rem;
    color : white;
    padding-left : .3rem; 
    border-radius : 5px;
    
    background-color : black;

    transform : scale(0);

    animation : ${fadeIn2} .5s ease-in-out forwards;
    animation-delay : 2s;
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


.inputs {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    opacity : 0;

    animation : ${fadeIn} 1s ease-in-out forwards;
    animation-delay : 2.4s;


    position : relative;
}

.slider {
    z-index: -1;
    transition : .2s ease-in-out;
    color : white;
}
.slider::before {
    content : "";
    opacity : 0;
    position : absolute;
    border : 2px solid white;
    height : 1.5rem;
    transition : .2s ease-in-out;
    transform-origin : left;
}
.slider:hover::before {
    transform : scaleX(4700%);
    opacity  :1;
    z-index : -1;
    transition : .3s ease-in-out;
}
#text:hover {
    color : black;
    transition : .3s ease-in-out;
}
.slider:active {
   transform : scale(1.1);
   transition : .2s ease-in-out;
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

    transform : scale(0%);

    animation : ${fadeIn2} .5s ease-in-out forwards;
    animation-delay : 2s;

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
#text {
    color : white;
}

.slider2::before {
    content : "";
    opacity : 0;
    position : absolute;
    border : 2px solid white;
    height : 1.5rem;
    transition : .2s ease-in-out;
    transform-origin : left;
}
.slider2:hover::before {
    transform : scaleX(2200%);
    opacity  :1;
    z-index : -1;
    transition : .3s ease-in-out;
}


.others {
    opacity : 0;
    animation : ${fadeIn} 1s ease-in-out forwards;
    animation-delay : 2s;
}
#header {
    color : white;
    font-family: 'Montserrat', sans-serif;
}


.eyeContainer {
    position : relative;
    transform : scale(0);
    animation : ${fadeIn2} .5s ease-in-out forwards;
    animation-delay : 2.2s;
    .visible {
        position : absolute;
        right : 2px;
        top : 3px;
        cursor: pointer;
        z-index : 2;
    }
}


.squares {
    color : pink;
    
    transform-origin : top;
    position : absolute;
    width : 3rem;
    opacity : .5;
    height : 3rem;
    animation : ${fallingDrop} 20s linear infinite;
    
    top : -15rem;

}


.squares0 {
    position : absolute;
    left : 50rem;
    
}
.squares1 {
    position : absolute;
    left : 40rem;
    
    animation-delay : 1.4s;
}
.squares2 {
    position : absolute;
    left : 30rem;
    
    animation-delay : 4s;
}
.squares3 {
    position : absolute;
    left : 20rem;
    
  
}
.squares4 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 2s;
}
.squares5 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 5s;
}
.squares6 {
    position : absolute;
    right : 20rem;
    
    animation-delay :10s;
}
.squares7 {
    position : absolute;
    right : 10rem;
    animation-delay : 4s;
}
.squares8 {
    position : absolute;
    left : 50rem;
    animation-delay : 7.5s;
}
.squares9 {
    position : absolute;
    left : 40rem;
    
    animation-delay : 8.5s;
}
.squares10 {
    position : absolute;
    left : 30rem;
    
    animation-delay :7s;
}
.squares11{
    position : absolute;
    left : 20rem;
    
    animation-delay : 11s;
}
.squares12 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 12s;
}
.squares13 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 15;
}
.squares14 {
    position : absolute;
    right : 20rem;
    
    animation-delay : 16s;
}
.squares15 {
    position : absolute;
    right : 10rem;
    animation-delay : 12.7s;
}
.squares16 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 12s;
}
.squares17 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 15;
}
.squares18 {
    position : absolute;
    right : 20rem;
    
    animation-delay : 20s;
}
.squares19 {
    position : absolute;
    right : 10rem;
    animation-delay : 15.2s;
}
.squares20 {
    position : absolute;
    right : 10rem;
    animation-delay : 18s;
}









@media screen and (max-width : 700px) {
    width : 100vw;
    position : fixed;
    form {
        margin-top : -4rem;
        width : 80vw !important;
        input {
            width : 50vw;
        }
    }
}
`


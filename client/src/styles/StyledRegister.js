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
    opacity : 1;
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


export const StyledRegister = styled.div`
height : 100vh;
background-color : black;
display : flex;
justify-content : center;
align-items : center;
width : 100%;


form {

    /* border : 2px solid white; */
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

    background-color : black;

}
#grid1 {
    position : absolute;
    border : 2px solid lightblue;  
    box-shadow : 0 0 2em lightblue;
    transform-origin : left;
    opacity : 0;
    left : 0;
    top : 0;
    animation : ${topToRight} .5s ease-in-out forwards;
}
#grid2 {
    position : absolute;
    transform-origin : top;
    border : 2px solid lightblue;  
    opacity : 0;
    box-shadow : 0 0 2em lightblue;
    right : 0;
    top : 0;
    animation : ${topToBottom} 1s ease-in-out forwards;
    animation-delay : .5s;
}
#grid3 {
    position : absolute;
    transform-origin : right;
    border : 2px solid lightblue;  
    opacity : 0;
    box-shadow : 0 0 2em lightblue;
    bottom : 0;
    right : 0;
    animation : ${bottomToLeft} .5s ease-in-out forwards;
    animation-delay : 1s;
}
#grid4 {
    position : absolute;
    transform-origin : bottom;
    border : 2px solid lightblue;  
    opacity : 0;
    box-shadow : 0 0 2em lightblue;
    bottom: 0;
    left : 0;
    animation : ${leftToTop} 1s ease-in-out forwards;
    animation-delay : 1.5s;
}

input {
    border : 1px solid lightblue;
    width : 17rem;
    opacity : 0;

    z-index : 2;
    background-color : black;
    animation : ${fadeIn} 1s ease-in-out forwards;
    animation-delay : 2.4s;
    height : 2rem;
    color : white;
    padding-left : .3rem;
    transition : .1s ease-in-out; 
    &:focus {
        outline : 1px solid gray;
        transition : .1s ease-in-out; 
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

}
.slider::before {
    content : "";
    opacity : 0;
    position : absolute;
    border : 2px solid lightblue;
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
#text {
    color : lightblue;
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
    font-family: 'Montserrat', sans-serif;
    width : 10rem;
    background-color : lightblue !important;
    color : black;
    transition : .2s ease-in-out;
    outline : 2px solid lightblue;
    &:hover {
        transform : scale(105%);
        transition : .2s ease-in-out;
    }
    &:active {
        transform : scale(110%);
        border : none;
        outline-offset : 10px;
        transition : .2s ease-in-out; 
    }
}

.slider2::before {
    content : "";
    opacity : 0;
    position : absolute;
    border : 2px solid lightblue;
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
    color : lightblue;
    font-family: 'Montserrat', sans-serif;
}


.eyeContainer {
    position : relative;
    opacity : 0;
    animation : ${fadeIn} 1s ease-in-out forwards;
    animation-delay : 2.4s;
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
    
    top : -12rem;

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


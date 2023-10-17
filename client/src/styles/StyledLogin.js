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
    border : 2px solid purple;
    transform : scale(1.1); 
    box-shadow : 0 0 .2em purple;
}
`

const glow = keyframes`
0% {
    box-shadow : 0 0 .3em purple;
}
50% {
    box-shadow : 0 0 .5em purple;
}
100% {
    box-shadow : 0 0 1em purple;
}
`
const fadeIn = keyframes`
0% {

}
100% {
    opacity : 1;
}
`



export const StyledLogin = styled.div`
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

    border : 2px solid black;
    animation : ${frame} 1s ease-in-out forwards;
    animation-delay : 1.8s;

}
#grid1 {
    position : absolute;
    border : 2px solid purple;;  
    box-shadow : 0 0 2em purple;
    transform-origin : left;
    opacity : 0;
    left : 0;
    top : 0;
    animation : ${topToRight} .5s ease-in-out forwards;
}
#grid2 {
    position : absolute;
    transform-origin : top;
    border : 2px solid purple;  
    opacity : 0;
    box-shadow : 0 0 2em purple;
    right : 0;
    top : 0;
    animation : ${topToBottom} 1s ease-in-out forwards;
    animation-delay : .5s;
}
#grid3 {
    position : absolute;
    transform-origin : right;
    border : 2px solid purple;  
    opacity : 0;
    box-shadow : 0 0 2em purple;
    bottom : 0;
    right : 0;
    animation : ${bottomToLeft} .5s ease-in-out forwards;
    animation-delay : 1s;
}
#grid4 {
    position : absolute;
    transform-origin : bottom;
    border : 2px solid purple;  
    opacity : 0;
    box-shadow : 0 0 2em purple;
    bottom: 0;
    left : 0;
    animation : ${leftToTop} 1s ease-in-out forwards;
    animation-delay : 1.5s;
}

input {
    border : 1px solid purple;
    opacity : 0;
    background-color : transparent;
    animation : ${fadeIn} 1s ease-in-out forwards;
    animation-delay : 2.4s;
    box-shadow : 0 0 .5em purple;
    color : white;
    padding-left : .3rem;
    transition : .1s ease-in-out; 
    &:focus {
        outline : none;
        border : 2px solid white;
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
    border : 2px solid purple;
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
    font-family: 'Montserrat', sans-serif;
    width : 10rem;
    background-color : purple;
    color : black;
    transition : .2s ease-in-out;
    outline : 2px solid purple;
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
    border : 2px solid purple;
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
    color : purple;
    font-family: 'Montserrat', sans-serif;
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


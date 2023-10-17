import styled from "styled-components";

export const StyledApp = styled.div`
    #close {
        position : absolute;
        cursor: pointer;
        transition : .2s ease-in-out;
        &:active {
            transform  : rotate(90deg);
            transition : .2s ease-in-out;
        }
    }
    #logout {
        position : fixed;
        z-index : 4;
        right : 1rem;
        top : 1rem;
    }
`
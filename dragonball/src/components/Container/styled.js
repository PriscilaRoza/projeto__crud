import styled from "styled-components";

export const Container = styled.div`
    max-width: 60%;
    margin: 0 auto;

    @media(max-width: 580px){
        max-width: 80%;
    }
    @media(max-width: 430px){
        max-width: 90%;
    }
`;
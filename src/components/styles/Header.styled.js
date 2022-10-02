import styled from "styled-components"

export const HeaderStyle = styled.header`
    background-color: #D8BFD8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 99;

    

    ul{
        display: flex;
        gap: 1rem;
    }
    
    li {
        list-style: none;
        padding-right: 1.5rem;
        font-size: 1.2rem;
        color: black;
    }
    h1{
        padding-left: 1.5rem;
    }

`

export const OpcionesHeader = styled.p`
    margin: 0rem;
    paddin: 0rem;
`
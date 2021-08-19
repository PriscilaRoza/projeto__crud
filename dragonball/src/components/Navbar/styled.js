import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background-color: #e76a24;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 0 2rem;
`;

export const Img = styled.img`
    width: 10rem;
    padding: 0.5rem 0;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 1.2rem 1rem;

    &:hover {
        background-color: #b15019;
    }
`;

export const LinkedPage = styled(Link)`
    text-decoration:none;
    color: #ffff;
`
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Questrial', sans-serif;
        height: 100%;
        margin: 0;
        padding: 0; 
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'sidebar header' 
                         'sidebar content';
`

export const Sidebar = styled.aside`
    grid-area: sidebar;
    z-index: 1;
    background: #F6F6F6;
    display: ${props => props.collapsed ? 'block' : 'none'};
    grid-column: 1;
`

export const Header = styled.header`
    grid-area: header;
    grid-column: 1 / span 3;
`

export const Content = styled.main`
    grid-area: content;
    grid-column: 1 / span 3;
    margin-bottom: 2rem;
`

export const ColorLine = styled.div`
    background: #f7f9fa;
    height: 6px;
    background-image: linear-gradient(to right, #34495e, #34495e 25%, #9b59b6 25%, #9b59b6 35%, #3498db 35%, #3498db 45%, #62cb31 45%, #62cb31 55%, #ffb606 55%, #ffb606 65%, #e67e22 65%, #e67e22 75%, #e74c3c 85%, #e74c3c 85%, #c0392b 85%, #c0392b 100%);
    background-size: 100% 6px;
    background-position: 50% 100%;
    background-repeat: no-repeat;
`;

export const NavWrapper = styled.div`
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
`;

export const NavTotal = styled.span`
    margin-top: 10px;
    margin-right: 15px;
`;

// Modal
export const Modal = styled.div`
    background-color: #fefefe;
    width: ${props => props.width ? `${props.width}%` : "40%"};
    border-radius: 4px;
    margin: 5% auto;
    height: 20rem;
    @media (max-width: 576px) {
        max-height: 57em;
        width: 90%;
    }
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalClose = styled.div`
    float: right;
    margin: 0.5rem 0.5rem 0 0;
    cursor: pointer;
`

// Table styles
export const Table = styled.table`
    margin: 0;
    padding: 0;
    min-width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    @media (max-width: 700px) {
        display: inline-table;
        border: 0;
    }
`;

//Loader Wrapper
export const LoaderWrapper = styled.div`
    width: 100px;
    margin: 3rem auto;
`;

export const Thead = styled.thead`
    @media (max-width: 700px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`;

export const Tr = styled.tr`
    @media (max-width: 700px) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
    }
`;

export const Th = styled.th`
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
    vertical-align: bottom;
    padding: 1rem;
    border-bottom: 2px solid #dee2e6;
    border-top: none;
    text-align: inherit;
`;

export const Tbody = styled.tbody`
    tr {
        cursor: pointer;
    }
    @media (min-width: 700px) {
        tr:hover {
            background-color: #F6F6F6;
        }
    }
`;

export const Td = styled.td`
    padding: 0.8rem 1rem;
    border-top: 1px solid #dee2e6;
    @media (max-width: 700px) {
        display: block;
        font-size: .8em;
        text-align: right;
        
        &:first-child {
            border-top: none;
        }

        &:last-child {
            border-bottom: none;
        }
          
        &::before {
            /*
            * aria-label has no advantage, it won't be read inside a table
            content: attr(aria-label);
            */
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;

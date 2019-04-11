import styled from 'styled-components';

export const SidebarHeader = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
`;

export const FilterHeader = styled.h5`
    margin-top: 10px;
    margin-bottom: 0;
    text-transform: uppercase;
    color: #a8a8a8;
`;

export const Wrapper = styled.div`
    display: flex;
    @media (max-width: 700px) {
        display: block;
    }
`;

export const CheckContainer = styled.div`
    padding: 0 1rem;
`;
export const CheckWrapper = styled.div`
    width: 35px;
    height: 6px;
    background: #333;
    margin: 0 1rem 2rem 0rem;
    position: relative;
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
    label {
        display: block;
        width: 12px;
        height: 12px;
        position: absolute;
        top: -3px;
        left: -3px;
        cursor: pointer;
        background: #fcfff4;
        background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
        border-radius: 50px;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.4s ease;
    }
    input[type=checkbox] {
        visibility: hidden;
        &:checked + label {
            left: 26px;
        }  
    }
    span {
        position: absolute;
        margin-left: 2.5rem;
        margin-top: -4px;
        color: #787878;
    }
`;

export const Img = styled.img`
    border-radius: 3px;
`;

export const Info = styled.div`
    margin: 5px 0 0 15px;
`;

export const Username = styled.span`
    font-weight: bold;
`;

export const Age = styled.span`
    display: block;
    margin-top: 5px;
    color: #222;
`;
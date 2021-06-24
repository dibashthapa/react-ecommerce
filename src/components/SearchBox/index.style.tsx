import styled from 'styled-components';

export const SearchButton = styled.button`
    background-color: rgb(0, 158, 127);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 700;
    display: flex;
    height: 48px;
    -webkit-box-align: center;
    align-items: center;
    border: 0px;
    outline: 0px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
    flex-shrink: 0;
    font-family: Lato, sans-serif;
    margin: 0px;
`;

export const SearchInput = styled.input`
    padding-left: 20px;
    width: 100%;
    flex-grow: 1;
    font-size: 15px;
    padding-right: 20px;
    height: 48px;
    color: rgb(119, 121, 140);
    background-color: inherit;
    appearance: none;
    border: 0px;
    &:focus {
        outline: 0px;
    }
`;

export const SearchResultWrapper = styled('ul')`
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    z-index: 10;
    width: 100%;
    list-style-type: none;
    border-radius: 0 0 3px 3px;
    padding: 0;
    width: 100%;
    margin: 4px 0 0;
    padding-bottom: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
    opacity: 1;
    transition: opacity ease-in-out 500ms;
`;
export const ItemWrapper = styled.li`
    padding: 0.7rem 1.5rem;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 15;
    font-weight: 400;
    color: #0d1136;

    &:hover {
        background-color: #f4f4f4;
    }
`;

export const SubmenuHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem 0.5rem;

    h3 {
        font-size: 15;
        font-family: sans-serif;
        font-weight: 700;
        margin: 0;
    }

    button {
        background-color: transparent;
        border: 0;
        outline: 0;
        font-family: sans-serif;
        font-size: 15;
        font-weight: 400;
        color: #0d1136;
        box-shadow: none;
        cursor: pointer;
        padding: 0;
    }
`;

import styled from "styled-components";

export const SignInStyle = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    outline: none;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    font-size: 18px;

    &:hover{
        background-color: #ccc;
    }
`;
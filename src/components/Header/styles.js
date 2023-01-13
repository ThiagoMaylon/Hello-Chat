import styled from "styled-components";

export const HeaderStyle = styled.div`
    background: #000;
    color: #fff;
    width: 800px;
    margin: auto;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;

    button{
        background: none;
        cursor: pointer;

        .btLogOut{
            color: #fff;
            width: 50px;
            height: 50px;
        }
    }
`;
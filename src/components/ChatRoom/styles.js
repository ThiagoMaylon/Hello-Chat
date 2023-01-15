import styled from "styled-components";

export const ChatStyle = styled.div`
    background-color: #aaa;
    width: 900px;
    margin: auto;
    border-radius: 5px;
    padding: 5px;

    main{
        overflow: auto;
        width: 100%;
        height: 80Vh;
    }

    form{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;

        input{
            font-size: 16px;
            border-radius: 5px;
            outline: none;
            width: 500px;
            height: 100%;
            background-color: #fff;
            border: 1px solid #000;
        }

        button{
            width: 200px;
            height: 100%;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            border: 1px solid #000;
        }
    }
`;
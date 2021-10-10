import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;

export const InputText = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid darkblue;
    border-radius: 5px;
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid darkblue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    height: 32px;
    padding: 0 5px;
    border: 1px solid #00008B;
    border-radius: 5px;
    background-color: #00008B;
    color: #FFF;
    cursor: pointer;
    
    &:hover {
        background-color: #00009E;
        color: #FFF;
    }
`;
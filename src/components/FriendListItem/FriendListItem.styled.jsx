import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px auto;
    width: 420px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
`;

export const Avatar = styled.img`
    border-radius: 8px;
    background: #cccccc;
`;

export const Name = styled.p`
    font-size: 30px;
    margin-left: 20px;
`;

export const Status = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => {
    return props.status ? `green` : `red`;
  }};;
    margin: 0 10px 0 5px;
`;

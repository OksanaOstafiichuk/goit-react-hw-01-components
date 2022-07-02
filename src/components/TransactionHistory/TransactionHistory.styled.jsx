import styled from "styled-components";

export const TableTransaction = styled.table`
    width: 800px;
    margin: 100px auto;
    box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
`;

export const TableTitle = styled.thead`
    background-color: #66ccff;
    font-size: 20px;
    text-transform: uppercase;
    color: #ffffff;
`;

export const Row = styled.tr`
    height: 50px;

    &:nth-child(even) {
        background-color: #e6f2ff;
    }
`;

export const BodyTable = styled.tbody`
    text-align: center;
    color: #888888;
`;

export const Type = styled.td`
    text-transform: capitalize;
`;
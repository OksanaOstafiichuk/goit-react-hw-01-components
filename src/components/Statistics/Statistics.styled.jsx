import styled from "styled-components";
import { getRandomHexColor } from '../../helpers/getRandomHexColor';

export const StatisticsBlock = styled.section`
    width: 420px;
    margin: 100px auto;
    box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
`;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    padding: 30px 0;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 84px;
    height: 84px;
    background-color: ${getRandomHexColor};
    color: #ffffff;
    font-size: 24px;
`;
import styled from "styled-components";

export const ProfileContainer = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    width: 420px;
    margin: 0 auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const Description = styled.div`
    text-align: center;
    padding: 40px 0;
`;

export const Avatar = styled.img`
    max-height: 200px;
    border-radius: 50%;
    margin-bottom: 30px;
    background: #cccccc;
`;

export const Name = styled.p`
    color: #154c79;
    font-size: 35px;
    font-weight: 700;
    margin: 0;
`;

export const Tag = styled.p`
    color: #888888;
    font-size: 20px;
    margin: 10px 0;
`;

export const Location = styled.p`
    color: #888888;
    font-size: 24px;
    margin: 10px 0;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 140px;
    height: 140px;
    background-color: #e6f2ff;
    border: 1px solid #888888;
`;

export const Label = styled.span`
    font-size: 20px;
    color: #888888;
`;

export const Quantity = styled.span`
    font-size: 24px;
    color: #154c79;
    font-weight: 600;
`;
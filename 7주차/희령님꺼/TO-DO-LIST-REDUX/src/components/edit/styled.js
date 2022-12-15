import styled from "styled-components";

const StDetail = styled.div`
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: column;
    background-color: #DEF5E5;
    padding: 30px 40px 100px 40px;
    display: flex;
    flex-direction: column;
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: end;
    width: 55%;
    margin-right: 10px;
`

const MoveBtn = styled.button`
    height: 35px;
    width: 120px;
    border-radius: 20px;
    border: transparent;
    background-color: #8EC3B0;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    :hover {
            opacity: 0.8;
    }
`

const DetailTextBox = styled.div`
    box-sizing: border-box;
    width: 55%;
    background-color: white;
    margin-top: 20px;
    border-radius: 20px;
    border: 5px solid #9ED5C5;
    padding: 15px 30px 25px 30px;

`

const ID = styled.p`
    margin: 0;
`

const Title = styled.h1`
    margin: 10px 0 10px 0;
`

const Content = styled.p`
    font-size: 20px;
    margin: 15px 0 30px 0;
`

const Btn = styled.button`
    margin-right: 12px;
    height: 35px;
    width: 100px;
    border-radius: 20px;
    border: transparent;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};

    :hover {
        opacity: 0.8;
    }
`

export { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, Title, Content, Btn }
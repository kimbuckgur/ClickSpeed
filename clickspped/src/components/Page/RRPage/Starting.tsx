import React from "react";
import styled from "styled-components";

const StartingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const StartingTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 40px;
  color: #e03131;

  margin: 0px;
`;

const StartingLine = styled.div`
  width: 40px;
  height: 1px;
  background: #b6b6b6;
  border-radius: 110px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StartingText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #5a5a5a;

  margin: 0px;
`;

const StartingButton = styled.button`
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 31px;
  color: #343434;

  width: 150px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #dadada;
  margin-top: 25px;
  border-radius: 1000px;
  padding-top: 3px;

  :hover {
    background: #e03131;
    color: white;
    border: none;
  }
`;

const Starting: React.FC<any> = ({ setStart }) => {
  return (
    <StartingContainer>
      <StartingTitle>반응속도 테스트</StartingTitle>
      <StartingLine />
      <StartingText>
        시작버튼 클릭 후에 화면이 초록색이 된면 클리해주세요
      </StartingText>
      <StartingButton
        onClick={() => {
          setStart(true);
        }}
      >
        시작하기
      </StartingButton>
    </StartingContainer>
  );
};

export default Starting;

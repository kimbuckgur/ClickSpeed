import React from "react";
import styled from "styled-components";
import TestBox from "../../TestBox/TestBox";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 45px;
  color: #e03131;

  margin: 0px;
  margin-top: 100px;
`;

const SubTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #5a5a5a;

  margin: 0px;
  margin-top: 30px;
`;

const GuideLine = styled.div`
  width: 200px;
  height: 1px;
  background: #b6b6b6;
  border-radius: 100px;

  margin-top: 40px;
  margin-bottom: 40px;
`;

export default function MainPage() {
  return (
    <MainBox>
      <Title>너의 속도가 보여</Title>
      <SubTitle>본격 작명센스 개구린 게이머 피지컬 테스트</SubTitle>
      <GuideLine />
      <TestBox />
    </MainBox>
  );
}

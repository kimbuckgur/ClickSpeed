import React from "react";
import styled from "styled-components";

const WaittingContainer = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #e03131;
  width: 100%;
  height: 100vh;
`;

const CircleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  margin-bottom: 60px;
`;

const Circle = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 100px;
`;

const WaittingTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 51px;
  color: #ffffff;

  margin: 0px;
`;

const WaittingCount = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #ffffff;

  margin: 0px;
  margin-top: 25px;
`;

export default function Waitting() {
  return (
    <WaittingContainer>
      <CircleLayout>
        <Circle />
        <Circle />
        <Circle />
      </CircleLayout>
      <WaittingTitle>화면이 초록색이 되면 클릭해주세요</WaittingTitle>
      <WaittingCount>1 / 5</WaittingCount>
    </WaittingContainer>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const BackBlue = "#5387EC";
const kBlue = "#3068D3";
const White = "#ffffff";
const WhiteGray = "#F0F0F0";
const kBlack = "#343434";

export default function TestBox() {
  const [onHover, setOnHover] = useState<boolean>(false);

  const TraTest = styled.div`
    transition: all 2s;
  `;

  const TestContainer = styled.button`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    background-color: ${onHover ? BackBlue : White};
    box-shadow: 0px 6.54545px 16.3636px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: 240px;
    height: 240px;
  `;

  const TestSVGAria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 240px;
    height: 140px;
  `;

  const TestSVGBox = styled.div`
    border: 2px solid ${onHover ? White : kBlue};
    border-radius: 1000px;
    width: 80px;
    height: 80px;
  `;

  const TestGuideLine = styled.div`
    width: 190px;
    height: 2px;
    background: ${onHover ? White : WhiteGray};
    border-radius: 110px;
  `;

  const TestTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: ${onHover ? White : kBlack};

    width: 240px;
    height: 98px;
  `;

  return (
    <TestContainer
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <TestSVGAria>
        <TestSVGBox>
          <img />
        </TestSVGBox>
      </TestSVGAria>
      <TestGuideLine />
      <TestTextBox>반응속도 테스트</TestTextBox>
    </TestContainer>
  );
}

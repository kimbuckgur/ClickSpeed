import React, { useRef, useState } from "react";
import test1 from "../../assets/svg/RRIcon/RRoff.svg";
import test2 from "../../assets/svg/RRIcon/RRon.svg";
import styled from "styled-components";

const kRed = "#E03131";
const White = "#ffffff";
const WhiteGray = "#F0F0F0";
const kBlack = "#343434";

export default function TestBox() {
  return (
    <TestAnimation>
      <TestContainer className="BackGroudColor">
        <TestSVGAria>
          <TestSVGBox className="SVGColor">
            <TestSVGImgBox className="testTwoColor">
              <img src={test2} />
            </TestSVGImgBox>
            <TestSVGImgBox className="testOneColor">
              <img src={test1} />
            </TestSVGImgBox>
          </TestSVGBox>
        </TestSVGAria>
        <TestGuideLine className="LineColor"></TestGuideLine>
        <TestTextBox className="TextColor">반응속도 테스트</TestTextBox>
      </TestContainer>
    </TestAnimation>
  );
}

const TestAnimation = styled.div`
  :hover {
    .BackGroudColor {
      background-color: ${kRed};
    }
    .SVGColor {
      border: 2px solid ${White};
    }
    .LineColor {
      background-color: ${White};
    }
    .TextColor {
      color: ${White};
    }
    .testOneColor {
      opacity: 0;
    }
    .testTwoColor {
      opacity: 1;
    }
  }
`;

const TestContainer = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: ${White};
  box-shadow: 0px 6.54545px 16.3636px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 240px;
  height: 240px;
`;

const TestSVGAria = styled.div`
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-items: center;
  width: 240px;
  height: 140px;
`;

const TestSVGBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${kRed};
  border-radius: 1000px;
  transition: all 0.3s;
  width: 80px;
  height: 80px;
`;

const TestSVGImgBox = styled.div`
  position: absolute;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
`;

const TestGuideLine = styled.div`
  width: 190px;
  height: 2px;
  background-color: ${WhiteGray};
  transition: all 0.3s;
  border-radius: 110px;
`;

const TestTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: ${kBlack};

  width: 240px;
  height: 98px;
`;

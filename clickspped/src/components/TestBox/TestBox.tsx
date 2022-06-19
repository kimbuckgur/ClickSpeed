import React, { useRef, useState } from "react";
import test1 from "../../assets/svg/RRIcon/RRoff.svg";
import test2 from "../../assets/svg/RRIcon/RRon.svg";
import styled from "styled-components";
import "./testcss.css";

const kRed = "#E03131";
const White = "#ffffff";
const WhiteGray = "#F0F0F0";
const kBlack = "#343434";

export default function TestBox() {
  const [onHover, setOnHover] = useState<boolean>(false);
  const TestContainerRef = useRef<HTMLButtonElement>(null);
  const TestSVGBoxRef = useRef<HTMLDivElement>(null);
  const TestGuideLineRef = useRef<HTMLDivElement>(null);
  const TestTextBoxRef = useRef<HTMLDivElement>(null);

  const TestAnimation = styled.div`
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
    align-items: center;

    width: 240px;
    height: 140px;
  `;

  const TestSVGBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid ${kRed};
    border-radius: 1000px;
    width: 80px;
    height: 80px;
  `;

  const TestGuideLine = styled.div`
    width: 190px;
    height: 2px;
    background-color: ${WhiteGray};
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
    <TestAnimation>
      <TestContainer
        ref={TestContainerRef}
        onMouseEnter={() => {
          if (TestContainerRef.current !== null) {
            TestContainerRef.current.classList.add("BackGroudColor");
          }
          if (TestSVGBoxRef.current !== null) {
            TestSVGBoxRef.current.classList.add("SVGColor");
          }
          if (TestGuideLineRef.current !== null) {
            TestGuideLineRef.current.classList.add("LineColor");
          }
          if (TestTextBoxRef.current !== null) {
            TestTextBoxRef.current.classList.add("TextColor");
          }
        }}
        onMouseLeave={() => {
          if (TestContainerRef.current !== null) {
            TestContainerRef.current.classList.remove("BackGroudColor");
          }
          if (TestSVGBoxRef.current !== null) {
            TestSVGBoxRef.current.classList.remove("SVGColor");
          }
          if (TestGuideLineRef.current !== null) {
            TestGuideLineRef.current.classList.remove("LineColor");
          }
          if (TestTextBoxRef.current !== null) {
            TestTextBoxRef.current.classList.remove("TextColor");
          }
        }}
      >
        <TestSVGAria>
          <TestSVGBox ref={TestSVGBoxRef}>
            <img src={onHover ? test2 : test1} />
          </TestSVGBox>
        </TestSVGAria>
        <TestGuideLine ref={TestGuideLineRef} />
        <TestTextBox ref={TestTextBoxRef}>반응속도 테스트</TestTextBox>
      </TestContainer>
    </TestAnimation>
  );
}

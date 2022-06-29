import React, { useState } from "react";
import styled from "styled-components";
import Starting from "./Starting";
import Waitting from "./Waitting";
import ClickPage from "./ClickPage";

const RRPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default function ReactionRatePage() {
  const RandomNumber: Array<number> = [3, 4, 5, 6, 2, 5, 4.6, 6, 7, 8, 3.5];
  const [clickNumber,setClickNumber] = useState(0)
  const [start, setStart] = useState<boolean>(false);
  const [numberOfTimes, setNumberOfTimes] = useState<number>(0);

  return (
    <RRPageContainer>
      {start ? <Waitting></Waitting> : <Starting setStart={setStart} />}
    </RRPageContainer> 
  );
}

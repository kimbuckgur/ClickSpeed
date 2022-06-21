import React from "react";
import styled from "styled-components";
import Starting from "./Starting";
import Waitting from "./Waitting";
import ClickPage from "./ClickPage"

const RRPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default function ReactionRatePage() {
  return (
    <RRPageContainer>
      <ClickPage />
    </RRPageContainer>
  );
}

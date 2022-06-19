import React from "react";
import styled from "styled-components";
import StartingPage from "./StartingPage";

const RRPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default function ReactionRatePage() {
  return (
    <RRPageContainer>
      <StartingPage />
    </RRPageContainer>
  );
}

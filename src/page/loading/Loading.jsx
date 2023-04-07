import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

function Loading(props) {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97vw;
  height: 100vh;
  z-index: 1000;
`;

export default Loading;

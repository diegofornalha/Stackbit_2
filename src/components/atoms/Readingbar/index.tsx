import { React } from "react";
import styled from "styled-components";
// Bar Styled Component
const Bar = styled.div`
  position: fixed;
  height: 6px;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(
    90deg,
    rgba(109, 227, 219, 1) 0%,
    rgba(132, 115, 177, 1) 100%,
    rgba(3, 9, 112, 1) 100%
  );
`;
function ReadingBar() {
  return <Bar style={{ width: "0%" }}></Bar>;
}
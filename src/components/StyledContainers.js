import { React } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-flow: column;
  justify-content: space-between;
`;

const RowContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export { PageContainer, RowContainer };

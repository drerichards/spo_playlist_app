import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;

  a {
    &:hover {
        text-decoration: underline;
    }
  }
`;

export const Th = styled.th`
  background-color: #626262;
  padding: 10px;
  text-align: left;
  position: sticky;
  top: 1rem;
  z-index: 10;
  border-bottom: 1px solid #ccc;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #627116
  }
`

export const Td = styled.td`
  padding: 8px;
  border-bottom: 0.5px solid #ddd;
`;

export const DummyHeader = styled.div`
  height: 1rem;
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #313131;
  width: 100%;
`;

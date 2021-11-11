import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <SContiner>
      <STitle>StyledComponents</STitle>
      <Sbtn>btn</Sbtn>
    </SContiner>
  );
};

const SContiner = styled.div`
  background: rgb(90, 40, 196);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  min-height: 1em;
`;
const STitle = styled.h1`
  &:hover {
    color: blue;
  }
`;
const Sbtn = styled.button`
  &:hover {
    color: red;
  }
`;

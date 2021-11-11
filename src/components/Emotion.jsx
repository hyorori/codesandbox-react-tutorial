/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    background: rgb(40, 40, 196);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    min-height: 1em;
    margin: 1em 0;
  `;
  const titleStyle = css({ color: "#aad" });
  // const SBtn = styled.button({ color: "#aad" });
  const SBtn = styled.button`
    color: red;
    &:hover {
      color: yellow;
      background: red;
    }
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SBtn>btn</SBtn>
    </div>
  );
};

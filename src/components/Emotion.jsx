// Emotionの使い方
// まず、下記のように書く
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // sassの記法がそのまま使える
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // JSのオブジェクトの形式で書くこともできる
  // もちろんこの場合は、キャメルケースで書く
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8",
  });

  // styled-componentsのように、コンポーネントを作成することもできる
  const StyledButton = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    /* styled-componentsでは、sassの記法が使える */
    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    // cssタグを使って、style属性に適用する
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <StyledButton>FIGHT!!</StyledButton>
    </div>
  );
};

// 注意点
// Emotionは色々なstyleの適用方法を採用できるので、どの記法を使うのか統一した方がよい

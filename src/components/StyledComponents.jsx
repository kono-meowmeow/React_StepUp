// styled-componentsの使い方
// import 変数名(任意) from "styled-components"
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    // 作成済みのstyleが適用されたコンポーネントを呼び出す
    <StyledContainer>
      <StyledTitle>- Styled Components -</StyledTitle>
      <StyledButton>FIGHT!!</StyledButton>
    </StyledContainer>
  );
}

// styleが適用されるコンポーネントを作成
// 変数名.タグ名でコンポーネントを作成
// 変数名.タグ名の後に``(バッククォート)で囲んでCSSを書く
const StyledContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 難点としては、パッと見では他からimportされたコンポーネントなのか、styled-componentsで作成したコンポーネントなのかがわからない点
// そのため、styled-componentsを使う場合は、コンポーネント名の先頭にStyledやSをつけるとよい(チーム開発では、チーム内でルールを決めるとよい)

const StyledTitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

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

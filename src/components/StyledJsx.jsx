// StyledJsxの使い方
// コンポーネントの中でstyleタグを書く。その中をバッククォートで囲んでCSSを書く
// styleタグの中に書いたCSSは、そのコンポーネントの中でのみ有効になる
// 他のコンポーネントには影響を与えない(グローバルにしたい場合は、styleタグの中にglobalを書く)
// Next.jsでは、styled-jsxがデフォルトで使える

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX-</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          {/* デフォルトではsassの記法は使えない(プラグインが必要) */}
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

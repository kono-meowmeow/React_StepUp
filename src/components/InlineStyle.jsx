// インラインスタイルは、Reactがデフォルトで提供している機能なので、他のライブラリをインストールする必要はない
export const InlineStyle = () => {
  // インラインスタイルの定義
  const containerStyle = {
    // このファイルはJSXなので、JSのオブジェクトを書く(文字列は""で囲む)
    border: "solid 2px #392eff",
    // CSSのプロパティ名はキャメルケースで書く(例: border-radius => borderRadius)
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    // style属性にインラインスタイルを指定
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};

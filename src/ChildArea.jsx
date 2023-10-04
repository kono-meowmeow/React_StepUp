const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// 親コンポーネントから渡されたpropsを引数に受け取る
export const ChildArea = (props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};

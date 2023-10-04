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

// 再レンダリングが起きる条件
// 1. stateが更新されたコンポーネントは再レンダリングされる
// 2. propsが更新されたコンポーネントは再レンダリングされる
// 3. 再レンダリングされたコンポーネント配下のコンポーネントも再レンダリングされる

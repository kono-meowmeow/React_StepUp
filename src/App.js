import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("Appがレンダリングされた！");
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  // inputが受け取ったイベントを引数にして、setTextにvalueを渡す
  // 入力した文字が表示される
  const onChangeText = (e) => setText(e.target.value);

  // ボタンを押すとopenの値が反転する(true→false、false→true)
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

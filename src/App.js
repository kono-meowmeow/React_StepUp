import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { Emotion } from "./components/Emotion"
import "./styles.css";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";

export default function App() {
  console.log("Appがレンダリングされた！");
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  // inputが受け取ったイベントを引数にして、setTextにvalueを渡す
  // 入力した文字が表示される
  const onChangeText = (e) => setText(e.target.value);

  // ボタンを押すとopenの値が反転する(true→false、false→true)
  const onClickOpen = () => setOpen(!open);

  // アロー関数で定義した関数は、propsで渡すと、毎回新しい関数を生成していることになる
  // 今回だと、inputの文字を変更するたびに、ChildAreaに新しい関数を渡していることになる
  // そのため、memo化しても、ChildAreaは再レンダリングされてしまう
  // そこで、処理が変わらない場合には、同じ関数を使い回すようにするため、useCallbackを使う
  // useCallbackは、第二引数に依存配列を渡すことで、依存配列の値が変わったときだけ、関数を再生成する
  // ↑useEffectと同じ
  // 下記のように、useCallbackで定義した関数をpropsで渡すと、不必要に再レンダリングされなくなる
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemoは、変数自体をmemo化する
  // useMemoは、第二引数に依存配列を渡すことで、依存配列の値が変わったときだけ、関数を再生成する
  // 依存配列の値が変わった時だけ、再計算するというような処理に使う
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    // BrowserRouterで囲むことで、ルーティングが可能になる
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <br />
        <br />
        <InlineStyle />
        <br />
        <CssModules />
        <br />
        <StyledJsx />
        <br />
        <StyledComponents />
        <br />
        <Emotion />
        <br />
        <br />
        {/* Linkを使うことでルーティングする */}
        {/* <Link to="path">hoge</Link> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      {/* 下記は、react-router-dom v6での記述方法 */}
      {/* Routesの中に、Routeを記述する */}
      <Routes>
        {/* Routeの中に、どのpathでどのcomponentを表示するのかを記述する */}
        {/* <Route path="path" element={<hoge />} /> */}
        <Route path="/" element={<Home />} />
        {/* ネストさせる */}
        <Route path="/page1">
          <Route index={true} element={<Page1 />} />
          <Route path="/page1/detailA" element={<Page1DetailA />} />
          <Route path="/page1/detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

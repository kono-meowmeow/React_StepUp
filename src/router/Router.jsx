// ルーティングを記述するファイル

import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1Layout } from "../Page1Layout";
import { page1Routes } from "./Page1Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <>
      {/* 下記は、react-router-dom v6での記述方法 */}
      {/* Routesの中に、Routeを記述する */}
      <Routes>
        {/* Routeの中に、どのpathでどのcomponentを表示するのかを記述する */}
        {/* <Route path="path" element={<hoge />} /> */}
        <Route path="/" element={<Home />} />
        {/* ネストさせる */}
        <Route path="/page1" element={<Page1Layout />}>
          {/* <Route path="" index={true} element={<Page1 />} />
          <Route path="/page1/detailA" index={false} element={<Page1DetailA />} />
          <Route path="/page1/detailB" index={false} element={<Page1DetailB />} /> */}
          {/* 上記コードを別ファイルに書いて、下のように展開する。 */}
          {page1Routes.map((route) => (
            <Route key={route.path} path={route.path} index={route.index} element={route.element} />
          ))}
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
};

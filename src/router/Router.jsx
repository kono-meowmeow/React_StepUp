// ルーティングを記述するファイル

import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1Layout } from "../Page1Layout";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
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
          <Route index={true} element={<Page1 />} />
          <Route path="/page1/detailA" element={<Page1DetailA />} />
          <Route path="/page1/detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
};
